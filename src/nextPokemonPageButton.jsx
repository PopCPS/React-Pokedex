const NextPageButton = (props) => {
    return (
        <>
            <button
                onClick={() => {
                    console.log(props)
                }}
            >
                Next page
            </button>
        </>
    )
}

export default NextPageButton