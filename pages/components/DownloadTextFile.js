import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
const DownloadTextFile=({text})=>{
  function triggerDownload() {
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'transcript.txt'
    a.click()
    URL.revokeObjectURL(url)
  }
    return <>
      <button title="Download text file" className="fa-2x" onClick={()=>triggerDownload()}>
        <FontAwesomeIcon icon={faFileArrowDown} />
      </button>
    </>
}
export default DownloadTextFile;
