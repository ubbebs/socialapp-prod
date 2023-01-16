import { MemoryRouter } from 'react-router-dom'

export const renderWithRouter = (children: JSX.Element, route: string) => {
  return <MemoryRouter initialEntries={[`${route}`]}>{children}</MemoryRouter>
}
