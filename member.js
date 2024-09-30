function skillsMember() {
  var member = require('./member');
  var skills = require('./skills');
  var memberSkills = member.skills();
  var skillList = skills.list();
  var memberSkillsList = [];
  for (var i = 0; i < memberSkills.length; i++) {
    for (var j = 0; j < skillList.length; j++) {
      if (memberSkills[i] === skillList[j].id) {
        memberSkillsList.push(skillList[j]);
      }
    }
  }
  return memberSkillsList;
}