import useStore from "./useStore";
import './assets/pageButtons.css'

const NextPageButton = (props) => {

    const { setApiUrl } = useStore()
    
    return (
        <>
            <button className="page-buttons"
                onClick={() => {
                    console.log(props.nextPageUrl)
                    setApiUrl(props.nextPageUrl)
                }}
            >
                {'>'}
            </button>
        </>
    )
}

export default NextPageButton