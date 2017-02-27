function searchFilesInFolderId(folderId,fileName)
{
  var allFilesInFolder
  var results = null;  
  
  // Get all folders with this name
  var fldr = DriveApp.getFolderById(folderId);
  
  // Check that at least one directory was returned
  if (!fldr) 
  {
      Logger.log('searchFilesInFolderId - No folders found for the specified Id');
  }
  else
  {  
      // Get all files with this name
      allFilesInFolder = fldr.searchFiles(fileName);
      
      // Check that at least one file was returned
      if (allFilesInFolder.hasNext() === false) 
      {
        Logger.log('searchFilesInFolder - No files with the provided name found inside the specified directory');
      }
      else
      {
        var targetFile = allFilesInFolder;
        results = targetFile;
      }
   }
  return results;
}
