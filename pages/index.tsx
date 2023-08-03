import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DynamicForm from '../components/DynamicForm/index'
import store from './store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <DynamicForm />
  </Provider>
  )
}
