function createDoc() {
  var folderName = 'TargetFolder';
  var templateName = 'TemplateDoc';
  var newDocName = 'NewDocName';
  // It's using the function getFilefromFolder in this repository
  var templateDoc = getFilefromFolder(folderName,templateName)
  var newDoc = templateDoc.next().makeCopy(newDocName)
  return newDoc.getId()
}
