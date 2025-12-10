import React, { SyntheticEvent } from 'react'

interface Props {
  portfolioValue: string
  onPortfolioDelete: (event: SyntheticEvent) => void
}

  const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button>X</button>
      </form>
    </div>
  )
}

export default DeletePortfolio