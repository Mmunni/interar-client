import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Interar`;
    }, [title])
};

export default useTitle;