import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import { ContainerStyled } from '.style'

function Main(){

    const [dat, setData] = useState({})
    const [country, setCountry ]= useState('brazil')

    const getCovidData = useCallback(
        (country) => {
           Api.getCountry(country)
           .then(data => setData(data))
        }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData])
  
    return(
        <ContainerStyled>
            <div className="mb-2">
                Testes....
            </div>
        </ContainerStyled>
    )
}

export default memo(Main)