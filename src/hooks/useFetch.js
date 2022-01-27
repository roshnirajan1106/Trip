import {React,useState,useEffect,useRef} from 'react';

export const useFetch = (url, _options) => {
    const [data,setData] = useState(null);
    const[loading , setLoading] = useState(false);
    const[error,setError] = useState(null);
    const options = useRef(_options).current;
    useEffect(() =>{
        const controller = new AbortController();
        console.log(_options);
        //make a function
        setLoading(true);
        const fetchData = async () =>{
            try{
                const response = await fetch(url, {signal:controller.signal});
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                setLoading(false);
                setData(json);
                setError(null);
                
                
            }
            catch(err){
                if(err.name === "AbortError"){
                    console.log('The Fetch was aborted');
                }else{
                setLoading(false);
                setError(err.message);
                }
            }
           
            
        }
        
            fetchData();

            return ()=>{
                controller.abort();
            }
       
       
    },[url,options])

    return {data,loading,error}
};


