const userdata = [
  {
    id: 1,
    UserName: '유저1',
    Email: 'sangmyung1@email.com',
    UserType: '구글로그인',
    RegisterDate: '2022.03.14',
    UnivCert: '상명대학교',
    UnivCertDate: '0000.00.01',
    SurveyRecord: ['설문A', '설문B'],
    SurveyRecordDate: ['0000.00.01', '0000.00.02'],
    UserTitle: ['관리자'],
    UserTitleDate: ['1998.05.18'],
    TermAgree: '0000.00.00.에 동의',
    UserGrade: 'A',
    UserPoint: [
      ['설문참여1', '0000.00.00', '+100'],
      ['설문참여2', '0000.00.01', '-100'],
      ['포인트사용', '1524.02.00', '-1000']
    ],
    UserProduct: [
      ['설문참여1', '0000.00.00', '벗겨먹는 고오스'],
      ['관리자뽀찌', '0000.00.01', '상명대학교 인수권'],
      ['포인트사용', '1524.02.00', '100 비트코인'],
      ['회원가입특전', '1524.02.00', '1000 이더리움']
    ]
  },
  {
    id: 2,
    UserName: '유저2',
    Email: 'sangmyung2@email.com',
    UserType: '일반로그인',
    RegisterDate: '2022.03.99',
    UnivCert: '상띵대학교',
    UnivCertDate: '0000.00.02',
    SurveyRecord: ['설문C', '설문D'],
    SurveyRecordDate: ['0000.00.03', '0000.00.04'],
    UserTitle: ['캡틴아메리카', '아이언맨'],
    UserTitleDate: ['1998.05.18', '2002.01.01'],
    TermAgree: '0000.99.00.에 동의',
    UserGrade: 'B',
    UserPoint: [
      ['설문참여1', '0000.00.00', '+100'],
      ['설문참여2', '0000.00.01', '-100'],
      ['포인트사용', '1524.02.00', '-1000']
    ],
    UserProduct: [
      ['설문참여2', '0000.00.00', '벗겨먹는 고오스 1개'],
      ['관리자뽀찌', '0000.00.01', '상명대학교 인수권'],
      ['포인트사용', '1524.02.00', '100 비트코인'],
      ['회원가입특전', '1524.02.00', '1000 이더리움']
    ]
  },
  {
    id: 3,
    UserName: '유저3',
    Email: 'sangmyung3@email.com',
    UserType: '페이스북로그인',
    RegisterDate: '2022.03.23',
    UnivCert: '하명대학교',
    UnivCertDate: '0000.00.03',
    SurveyRecord: ['설문E', '설문F', '설문C', '설문D'],
    SurveyRecordDate: ['0000.00.05', '0000.00.06', '0000.00.06', '0000.00.06'],
    UserTitle: ['호크아이슨배임', '블랙위도우', '토르', '헐크'],
    UserTitleDate: ['1998.05.18', '2002.01.01', '1998.02.02', '202203.15'],
    TermAgree: '9999.00.00.에 동의',
    UserGrade: 'C',
    UserPoint: [
      ['설문참여1', '0000.00.00', '+100'],
      ['설문참여2', '0000.00.01', '-100'],
      ['포인트사용', '1524.02.00', '-1000']
    ],
    UserProduct: [
      ['설문참여2', '0000.00.00', '벗겨먹는 고오스 1개'],
      ['관리자뽀찌', '0000.00.01', '상명대학교 인수권'],
      ['포인트사용', '1524.02.00', '100 비트코인'],
      ['회원가입특전', '1524.02.00', '1000 이더리움'],
      ['회원가입특전', '1524.02.00', '1000 이더리움'],
      ['회원가입특전', '1524.02.00', '1000 이더리움']
    ]
  },
  {
    id: 4,
    UserName: '유저4',
    Email: 'sangmyung4@email.com',
    UserType: '페이스북로그인',
    RegisterDate: '2022.03.04',
    UnivCert: '하띵대학교',
    UnivCertDate: '0000.00.05',
    SurveyRecord: ['설문E', '설문F', '설문A', '설문B'],
    SurveyRecordDate: ['0000.00.05', '0000.00.06', '0000.00.06', '0000.00.06'],
    UserTitle: ['비전', '블랙팬서', '닥터스트레인지'],
    UserTitleDate: ['1998.05.18', '2002.01.01', '1945.08.15'],
    TermAgree: '9999.00.00.에 동의',
    UserGrade: 'D',
    UserPoint: [
      ['설문참여1', '0000.00.00', '+100'],
      ['설문참여2', '0000.00.01', '-100']
    ],
    UserProduct: [
      ['설문참여2', '0000.00.00', '벗겨먹는 고오스 1개'],
      ['관리자뽀찌', '0000.00.01', '상명대학교 인수권'],
      ['포인트사용', '1524.02.00', '100 비트코인'],
      ['회원가입특전', '1524.02.00', '1000 이더리움'],
      ['회원가입특전', '1524.02.00', '1000 이더리움'],
      ['회원가입특전', '1524.02.00', '1000 도지코인']
    ]
  },
  {
    id: 5,
    UserName: '유저5',
    Email: 'sangmyung4@email.com',
    UserType: '페이스북로그인',
    RegisterDate: '2022.03.04',
    UnivCert: '중명대학교',
    UnivCertDate: '0000.00.05',
    SurveyRecord: ['설문E', '설문F', '설문A', '설문B', '설문A', '설문B'],
    SurveyRecordDate: [
      '0000.00.05',
      '0000.00.06',
      '0000.00.06',
      '0000.00.06',
      '0000.00.06',
      '0000.00.06'
    ],
    UserTitle: ['스파이더맨', '앤트맨'],
    UserTitleDate: ['1998.05.18', '2002.01.01'],
    TermAgree: '9999.12.00.에 동의',
    UserGrade: 'A+',
    UserPoint: [
      ['설문참여1', '0000.00.00', '+1100'],
      ['설문참여2', '0000.00.01', '-1000'],
      ['설문참여3', '0000.00.11', '-5000']
    ],
    UserProduct: [['설문참여2', '0000.00.00', '벗겨먹는 고오스 1개']]
  }
]
export default userdata
