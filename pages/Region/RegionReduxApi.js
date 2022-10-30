import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetRegionRequest, DelRegionRequest } from '../redux-saga/Action/RegionAction'
import FormikAddRegionApi from './FormikAddRegionApi'
import FormikEditRegionApi from './FormikEditRegionApi'
import Header from '../component/Header/Header'
import Layout from '../component/layout/Layout'

export default function FormikRegionViewApi() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const { regions } = useSelector(state => state.regionStated)
  useEffect(() => {
    dispatch(GetRegionRequest())
  }, [])

  const onDelete = async (id) => {
    dispatch(DelRegionRequest(id))
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {
        displayEdit ?
          <FormikEditRegionApi
            id={id}
            setDisplay={setDisplayEdit}
            closeAdd={() => setDisplayEdit(false)}
            onRefresh={() => setRefresh(true)}
          />
          :
          display ?
            <FormikAddRegionApi
              setDisplay={setDisplay}
              closeAdd={() => setDisplay(false)}
              onRefresh={() => setRefresh(true)}
            />
            :
            <>
              <Layout>
                <Header name={'Region'} setDisplay={setDisplay} />
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">Region ID</th>
                      <th scope="col" className="px-6 py-3">Region Name</th>
                      <th scope="col" className="px-6 py-3">Region File</th>
                      <th scope="col" className="px-6 py-3">Region Foto</th>
                      <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="overscroll-auto md:overscroll-contain">
                    {
                      regions && regions.map(reg => (
                        <tr key={reg.region_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{reg.regionId}</td>
                          <td className="px-6 py-2">{reg.regionName}</td>
                          <td className="px-6 py-2">{reg.regionFile}</td>
                          <td className="px-6 py-2">{reg.regionPhoto}</td>
                          <td>
                            <td className='py-2'>
                              <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(reg.regionId)}>Delete Region</button>
                            </td>
                            <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(reg.regionId)}>Edit Region</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </Layout>
            </>
      }
    </div>
  )
}
