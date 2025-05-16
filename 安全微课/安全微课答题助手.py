import requests
import json


# 随手写的 目前只针对2024版


def get_tenantCode(schoolName):
    url = 'https://weiban.mycourse.cn/pharos/login/getTenantListWithLetter.do?timestamp=1713318535.868'

    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
        'x-token': f'{x_token}'
    }

    schoolList = []
    Code = ''

    r = requests.post(url, headers=headers)
    data = json.loads(r.text)['data']
    for i in data:
        l = i['list']
        schoolList = schoolList + l
    for school in schoolList:
        if school['name'] == schoolName:
            Code = school['code']
            break
    return Code


# 懒得写了 F12吧 后续有时间再完善
# def get_userID_token():
#     url = 'https://weiban.mycourse.cn/pharos/login/login.do?timestamp=1713319251.071'


# 获取已完成考试题目答案
def get_questions_answers():
    url = 'https://weiban.mycourse.cn/pharos/exam/reviewPaper.do'
    data = {
        'tenantCode': f'{tenantCode}',
        'userId': f'{userId}',
        'userExamId': f'{userExamId}',
        'isRetake': 2
    }

    r = requests.post(url, data=data, headers=headers)

    content = json.loads(r.text)['data']['questions']

    questions_answers = {}

    for question in content:
        answers = []
        optionList = question['optionList']
        for i in optionList:
            if i['isCorrect'] == 1:
                answers.append(i['content'])
        questions_answers[question['title']] = answers

    return questions_answers


def get_datafile():
    file = open('questions.txt', 'r')
    data = file.read()
    return eval(data)


# 获取当前考试题目列表
def get_questions_List():
    url = 'https://weiban.mycourse.cn/pharos/exam/startPaper.do'
    data = {
        'tenantCode': f'{tenantCode}',
        'userId': f'{userId}',
        'userExamPlanId': f'{userExamPlanId}'
    }

    r = requests.post(url, data=data, headers=headers)

    content = json.loads(r.text)['data']['questionList']

    questions = {}

    for question in content:
        key = (question['id'], question['title'])
        optionList = question['optionList']
        answers = []
        for i in optionList:
            id, content = i['id'], i['content']
            answers.append((id, content))
        questions[key] = answers

    return questions


# 答题
def recordQuestion(questionId, answerIds):
    url = 'https://weiban.mycourse.cn/pharos/exam/recordQuestion.do?timestamp=1713258614.138'

    data = {
        'tenantCode': f'{tenantCode}',
        'userId': f'{userId}',
        'userExamPlanId': f'{userExamPlanId}',

        'questionId': f'{questionId}',
        'useTime': 3600,
        'answerIds': f'{answerIds}',

        'examPlanId': f'{examPlanId}'
    }

    r = requests.post(url, data=data, headers=headers)
    content = json.loads(r.text)
    print(content)


# 提交
def submit():
    url = 'https://weiban.mycourse.cn/pharos/exam/submitPaper.do?timestamp=1713262229.987'
    data = {
        'tenantCode': f'{tenantCode}',
        'userId': f'{userId}',
        'userExamPlanId': f'{userExamPlanId}'
    }

    r = requests.post(url, data=data, headers=headers)
    content = json.loads(r.text)
    print(content)


if __name__ == '__main__':
    # 运行之前一定填写好下面的参数
    userId = 'f61ac4be-3273-4a36-af3d-3bdd33d4fb31'  # 用户ID
    x_token = '1b1fd5e0-4232-4ae4-bd39-9622a9b79084'  # 校验
    tenantCode = get_tenantCode('武汉理工大学')  # 学校Code

    examPlanId = 'a89a376c-20ce-4cb3-9b75-5cb563ca0534'  # 考试项目ID 固定

    # userExamId = '23653d01-0816-41c5-91d0-e128c2b3dffe'  # 已完成考试ID
    userExamPlanId = '793d19a5-bb83-4cef-86d0-c6476fedc83b'  # 开始考试后当前考试ID

    headers = {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
        'x-token': f'{x_token}'  # 关键参数token
    }

    # questions_answers = get_questions_answers()
    questions_answers = get_datafile()

    print(len(questions_answers), questions_answers)

    questions = get_questions_List()
    print(len(questions), questions)

    # 题库有答案数量
    acc = (len(set(questions_answers.keys()) & set(question[1] for question in questions.keys())))/len(questions)
    print(f"预估正确率：{acc}")

    for question, options in questions.items():
        questionid = question[0]
        if question[1] not in questions_answers:
            continue
        else:
            answersids = []
            for option in options:
                if option[1] in questions_answers[question[1]]:
                    answersids.append(option[0])
            recordQuestion(questionid, ','.join(answersids))
    if acc > 0.8:
        submit()
