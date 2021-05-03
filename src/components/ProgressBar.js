import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';
//import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress,url);

  useEffect(() => {
      if(url){
          setFile(null);
      }
      
  }, [url,setFile])

    return (
        <div className='progress-bar' style={{width:progress+'%'}}>progress</div>
    )
}

export default ProgressBar;