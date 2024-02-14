import React from 'react'
import classes from './loading..module.css'
import { useLoading } from '../../hooks/useLoading'


export default function Loading() {
  const {isLoading} = useLoading();
  if(!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img src="/Loading.svg" alt='Loading!'/>

      </div>
    </div>
  )
}
