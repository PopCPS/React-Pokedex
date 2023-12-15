import useStore from "./useStore";
import './assets/pageButtons.css'

const PreviousPageButton = (props) => {

    const { setApiUrl } = useStore()
    
    return (
        <>
            <button className="page-buttons"
                onClick={() => {
                    console.log(props.previousPageUrl)
                    setApiUrl(props.previousPageUrl)
                }}
            >
                {'<'}
            </button>
        </>
    )
}

export default PreviousPageButton