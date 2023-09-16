import styles from './OrderHistory.module.scss'
import { useState, useEffect } from 'react'
import * as ordersAPI from '../../utilities/orders-api'
import OrderList from '../OrderList/OrderList'
import OrderDetail from '../OrderDetail/OrderDetail'

export default function OrderHistory() {
  /* ----- State ----- */
  const [orders, setOrders] = useState([])
  const [activeOrder, setActiveOrder] = useState(null)

  /* ----- Effects ----- */
  useEffect(function () {
    // load previous paid orders
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory()
      setOrders(orders)
      // if no orders, acriveORder will be set to null
      setActiveOrder(orders[0] || null)
    }
    fetchOrderHistory()
  }, [])

  /* ----- Event Handlers ----- */
  function handleSelectOrder(order) {
    setActiveOrder(order)
  }

  /* ----- Rendered UI ----- */
  return (
    <main className={styles.OrderHistory}>
      <aside className={styles.aside}>
        <OrderList
          orders={orders}
          activeOrder={activeOrder}
          handleSelectOrder={handleSelectOrder}
        />
      </aside>
      <OrderDetail
        order={activeOrder}
        location={location}
      />
    </main>
  )
}