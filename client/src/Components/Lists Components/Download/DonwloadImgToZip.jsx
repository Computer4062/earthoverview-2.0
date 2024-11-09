import JSZip from 'jszip';

const path =  "../../../../public/Images/Country Flags/"

const downloadToZip = async (array, fileName) => {
  const zip = new JSZip();

  for (const imageUrl of array) {
    const response = await fetch(path + imageUrl);
    const blob = await response.blob();
    zip.file(imageUrl, blob);
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

function DownloadToZipCard(props){
	return(
		<div class="w-100 d-flex justify-content-center">
			<div class="download-to-csv-card">
				<button class="download-btn" onClick={() => downloadToZip(props.array, props.fileName)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg></button>
				<label>Download images to ZIP</label>
			</div>
		</div>
	);
}

export default DownloadToZipCard;