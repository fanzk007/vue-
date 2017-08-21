
import Hello from '@/components/Hello'
export default [
  {
    path: '/index',
    component: Hello
  },
  {
    path: '/',
    redirect: '/index'
  }
]
