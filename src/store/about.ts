import { Store } from '../core/heropy';

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'DONNIE / Yoo,Donggyu',
  email: 'jp.dg.yoo@gmail.com',
  blog: 'https://heropy.blog',
  github: 'https://github.com/donggyuyoo', 
  repository: 'https://github.com/ParkYoungWoong/vanillajs-movie-app'
})