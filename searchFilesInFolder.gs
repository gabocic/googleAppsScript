// This function will search files in folders by a specific pattern. Keep in mind that if more than one folder with the same name exists, only the first one with be searched 

function searchFilesInFolder(folderName,fileName)
{
  var allFilesInFolder
  var results = null;  
  
  // Get all folders with this name
  var fldr = DriveApp.getFoldersByName(folderName);
  
  // Check that at least one directory was returned
  if (fldr.hasNext() === false) 
  {
      Logger.log('searchFilesInFolder - No directories found for the specified name');
  }
  else
  {  
    // Go through the returned folders
    while (fldr.hasNext())
    {
      // Get all files with this name
      allFilesInFolder = fldr.next().searchFiles(fileName);
      
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
      break;
    }
  }
  return results;
}
