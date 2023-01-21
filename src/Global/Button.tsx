import React from 'react'

export default function Button(props: any) {
  const { clickListener, title } = props;

  return <button className="bg-gray-800 p-2 border-gray-800 rounded" onClick={clickListener}>{title}</button>
}
