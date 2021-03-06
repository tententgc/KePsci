import Layout from '/components/layouts'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className='login-card mx-auto drop-shadow-md'>
        <p className='text-center text-2xl font-semibold mb-3'>SIGN UP</p>
        <form>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Username</span>
            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Password</span>
            <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Confirm Password</span>
            <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-2'>
            <Link href="/login">
              <a className='transition duration-75 mb-5 text-blue-500 hover:text-blue-700'>Already have an account?</a>
            </Link>
          </div>
          <button className='transition duration-75 block px-3 py-2 w-full mb-3 rounded-md bg-blue-500 text-white hover:bg-blue-600'>Register</button>
          <p className='text-center text-gray-500'>⎯⎯⎯⎯⎯⎯  Or  ⎯⎯⎯⎯⎯⎯</p>
        </form>
      </div>
    </Layout>
  )

}