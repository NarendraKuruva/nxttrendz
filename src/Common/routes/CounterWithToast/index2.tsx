import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { Link } from 'react-router-dom'

// import CounterStore from '../../stores/CounterStore'

// // interface CounterWithToastProps {}

// interface InjectedProps extends CounterWithToastProps {
//    counterStore: CounterStore
// }

// @inject('counterStore')
// @observer
// class CounterWithToast extends Component<CounterWithToastProps> {
//    get injectedProps(): InjectedProps {
//       return this.props as InjectedProps
//    }

//    get counterStore(): CounterStore {
//       return this.injectedProps.counterStore
//    }

//    handleIncrement = (): void => {
//       const { incrementCounter } = this.counterStore
//       incrementCounter()
//       toast(`Count has been incremented by 1`)
//    }

//    handleDecrement = (): void => {
//       const { counterStore } = this.injectedProps
//       if (counterStore.count !== 0) {
//          counterStore.decrementCounter()
//          toast(`Count has been decremented by 1`)
//       } else {
//          toast(`Count is 0 and it can't be decremented`)
//       }
//    }

//    render(): JSX.Element {
//       const { counterStore } = this.injectedProps
//       return (
//          <div>
//             <h1>{counterStore.count}</h1>
//             <button onClick={this.handleIncrement}>+</button>
//             <button onClick={this.handleDecrement}>-</button>

//             <Link to='/'>
//                <p>Home</p>
//             </Link>
//          </div>
//       )
//    }
// }

// export default CounterWithToast
