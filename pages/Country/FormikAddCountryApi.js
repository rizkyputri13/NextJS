import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { AddCountryRequest } from '../redux-saga/Action/CountryAction'

export default function FormikAddCountryApi(props) {
    const dispatch = useDispatch()
    const [previewImg, setPreviewImg] = useState()
    const [preViewFile, setPreviewFile] = useState()
    const [uploaded, setUploaded] = useState(false)
    const [uploadedFile, setUploadedFile] = useState(false)
    const validationSchema = Yup.object().shape({
        countryName: Yup.string('Enter Country Name').required('Country Name is Required'),
        foto: Yup.string('Enter Country Foto').required('Country Foto is Required'),
        file: Yup.string('Enter Country File').required('Country File is Required')
    })
    const formik = useFormik({
        initialValues: {
            countryName: undefined,
            file: undefined,
            foto: undefined
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('countryName', values.countryName)
            payload.append('file', values.file)
            payload.append('foto', values.foto)

            dispatch(AddCountryRequest(payload))
            props.closeAdd()
            window.alert('Data Successfully Insert')
            props.onRefresh()
        }
    })
    const uploadOnChange = name => event => {
        let reader = new FileReader()
        const file = event.target.files[0]
        console.log(event.target.files);
        reader.onload = () => {
            formik.setFieldValue('foto', file)
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
        setUploaded(true)
    }
    const uploadFileOnChange = name => e => {
        let reader = new FileReader()
        const files = e.target.files[0]
        console.log(e.target.files);
        reader.onload = () => {
            formik.setFieldValue('file', files)
            setPreviewFile(reader.result)
        }
        reader.readAsDataURL(files)
        setUploadedFile(true)
    }
    const onClearImage = event => {
        event.preventDefault()
        setUploaded(false)
        setPreviewImg(null)
    }
    const onClearFile = e => {
        e.preventDefault()
        setUploadedFile(false)
        setPreviewFile(null)
    }
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Country Name : </label>
            <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                type="text"
                name="countryName"
                id="countryName"
                value={formik.values.countryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="countryName"
                onInvalid={formik.validateField}
            />
            {formik.touched.countryName && formik.errors.countryName ? <span className="mt-2 text-sm text-red-600">{formik.errors.countryName}</span> : null}
            <div>
                <label className="block text-sm font-medium text-gray-700">Foto : </label>
                <div>
                    <div>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                {
                                    uploaded === false ?
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img crossOrigin='anonymous' src={previewImg} alt='image' />
                                            <span className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" onClick={onClearImage}>Remove</span>
                                        </>
                                }

                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="foto" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="foto" name="foto" type="file" accept='image/*' onChange={uploadOnChange('file')} className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
                                {formik.touched.foto && formik.errors.foto ? <span className="mt-2 text-sm text-red-600">{formik.errors.foto}</span> : null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">File : </label>
                <div>
                    <div>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                {
                                    uploadedFile === false ?
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img crossOrigin='anonymous' src={preViewFile} alt='image' />
                                            <span className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" onClick={onClearFile}>Remove</span>
                                        </>
                                }

                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file" name="file" type="file" accept='image/*' onChange={uploadFileOnChange('files')} className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PDF up to 1MB</p>
                                {formik.touched.file && formik.errors.file ? <span className="mt-2 text-sm text-red-600">{formik.errors.file}</span> : null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
                <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Cancel </button>
            </div>
        </div>
    )
}
