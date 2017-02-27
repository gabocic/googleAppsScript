function getFileFromFolderById(folderId,fileName)
{
  var results = null;  
  
  // Get all folders with this name
  var fldr = DriveApp.getFolderById(folderId);
  
  // Check that at least one directory was returned
  if (!fldr) 
  {
      Logger.log('getFilefromFolder - No directories found for the specified name');
  }
  else
  {  
       // Get all files with this name
       var allFilesInFolder = fldr.getFilesByName(fileName);
      
      // Check that at least one file was returned
      if (allFilesInFolder.hasNext() === false) 
      {
        Logger.log('getFilefromFolder - No files with the provided name found inside the specified directory');
      }
      else
      {
          var targetFile = allFilesInFolder;
          results = targetFile;
      }
   }
  return results;
}
