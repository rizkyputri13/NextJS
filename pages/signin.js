/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useFormik, ErrorMessage } from "formik";
import { doGetSigninRequest } from './redux-saga/Action/UsrAction';
import { useRouter } from 'next/router';
import { LockClosedIcon } from '@heroicons/react/solid'
import * as Yup from "yup";
import Link from 'next/link';

export default function signin() {
  const dispatch = useDispatch();
  const router = useRouter()
  const { message, UserProfile } = useSelector(state => state.usrStated);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup
      .string()
      .min(3)
      .max(10)
      .required('Password is required'),
  });

  useEffect(() => {
    if (UserProfile) {
      router.push('/')
    }
  }, [UserProfile])

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      let payload = {
        username: values.username,
        password: values.password
      };
      dispatch(doGetSigninRequest(payload));
    }
  });
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign up your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {formik.touched.username && formik.errors.username ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.username}</span> : null}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ?
                <span className="mt-2 text-sm text-red-600">{formik.errors.password}</span>
                : null}
              {message ?
                <span className="mt-2 text-sm text-red-600">{message}</span>
                : null}
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={formik.handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >

              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
