function getFilefromFolder(folderName,fileName)
{
  var results = null;  
  
  // Get all folders with this name
  var fldr = DriveApp.getFoldersByName(folderName);
  
  // Check that at least one directory was returned
  if (fldr.hasNext() === false) 
  {
      Logger.log('getFilefromFolder - No directories found for the specified name');
  }
  else
  {  
    // Go through the returned folders
    while (fldr.hasNext())
    {
      // Get all files with this name
       var allFilesInFolder = fldr.next().getFilesByName(fileName);
      
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
      // *Only* the first directory returned is examined
      break;
    }
  }
  return results;
}

