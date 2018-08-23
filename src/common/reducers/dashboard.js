import { SINGLE_CRICKETER_DETAILS, UPDATED_CRICKETER_DATA } from '../constant/constants'

const initialState = {
  fundsSummary: null,
  walletDetails: null,
  allCricketerData:[
    {'name': 'Mahendra Singh Dhoni', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'http://www.espncricinfo.com/inline/content/image/1099927.html?alt=20'},
    {'name': 'Virendra Sehwag', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Delhi', 'average':'50.76', 'src':'http://2.bp.blogspot.com/-dlmZ0gLe6m4/UCu8nJsEBDI/AAAAAAAAAXc/ycY3hS2X-g4/s400/100630.3.jpg'},
    {'name': 'Virat Kohli', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Benglore', 'average':'50.76', 'src':'http://static.cricinfo.com/db/PICTURES/CMS/263600/263697.20.jpg'},
    {'name': 'Rohit sharma', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Mumbai', 'average':'50.76', 'src':'http://img.dainiksaveratimes.com/Uploads/img/2017/9/15/3715092017080355.jpg'},
    {'name': 'Rahul Dravid', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Rajasthan', 'average':'50.76', 'src':'http://static.cricinfo.com/db/PICTURES/CMS/108400/108439.1.jpg'},
    {'name': 'Yuvraj Singh', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Panjab', 'average':'50.76', 'src':'http://www.fakingnews.firstpost.com/wp-content/uploads/2016/01/yuvraj-hell412.jpg'},
    {'name': 'KL Rahul', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Benglore', 'average':'50.76', 'src':'https://timesofindia.indiatimes.com/thumb/msid-57569320,width-400,resizemode-4/57569320.jpg'},
    {'name': 'Shikhar Dhawan', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Hyderabad', 'average':'50.76', 'src':'http://www.theshillongtimes.com/wp-content/uploads/2017/09/Shikhar-Dhawan.jpeg'},
    {'name': 'Yujvendra Chahal', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Benglore', 'average':'50.76', 'src':'http://i.cricketcb.com/stats/img/faceImages/7910.jpg'},
    {'name': 'Bhuvaneshvar Kumar', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Benglore', 'average':'50.76', 'src':'http://st3.cricketcountry.com/wp-content/uploads/cricket/20140521024146.jpeg'},
    {'name': 'Hardik Pandya', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Mumbai', 'average':'50.76', 'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfw26Kk2X_09mWbAfWJlTCgvpjYU1vc_qpwDEhZiQBh7Sd6oN'},
    {'name': 'R Ashwin', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'https://www.quirkybyte.com/wp-content/uploads/2016/03/ravichandran-ashwin1.jpg'},
    {'name': 'Ravindra Jadeja', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZ8MOgBfnWwGpz9yHdVfpB8_EQxgzO3i7svxugPhq6JztzuZg'},
    {'name': 'Suresh Raina', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'http://i.cricketcb.com/stats/img/faceImages/413.jpg'},
    {'name': 'Zaheer Khan', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Delhi', 'average':'50.76', 'src':'http://static.cricinfo.com/db/PICTURES/CMS/202600/202669.1.jpg'}
  ]
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case SINGLE_CRICKETER_DETAILS:
      return {
        ...state,
        cricketerData: action.payload
      }
    case UPDATED_CRICKETER_DATA:
      return {
        ...state,
        allCricketerData: action.payload
      }
    default :
      return {
        ...state
      }
  }
}
