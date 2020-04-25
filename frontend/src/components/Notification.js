import React, { useState } from 'react'

const [ notificationMessage, setNotificationMessage ] = useState(null)
const [ notificationType, setNotificationType ] = useState(null)

const Notification = () => {
  if (notificationMessage === null) {
    return null
  }
  return (
    <div className={notificationType}>
      {notificationMessage}
    </div>
  )
}
const MakeNotification = (message, type, timeout) => {
  setNotificationMessage(message)
  setNotificationType(type)
  setTimeout(() => {
    setNotificationMessage(null)
    setNotificationType(null)
  }, timeout)
}

export default {Notification, MakeNotification}