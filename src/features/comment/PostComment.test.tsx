import { screen, render } from '@testing-library/react'
import moment from 'moment'
import { describe, it, Mock, vi } from 'vitest'
import { useGetUserData } from '../../services/getUserData'
import { mockedGetUserData } from '../../test_utils/customData'
import { renderWithRouter } from '../../test_utils/renderWithRouter'
import { PostComment } from './PostComment'

const mockedUseProduct = useGetUserData as Mock<any>

const propsData = {
  authorid: 'abcdefgh0123456789',
  comment: 'My comment',
  time: 1355310000,
}

vi.mock('../../services/getUserData')

describe('TableComponent', () => {
  beforeEach(() => {
    mockedUseProduct.mockImplementation(() => ({
      isLoading: false,
      data: mockedGetUserData,
    }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Checks if header while loading', () => {
    mockedUseProduct.mockImplementation(() => ({
      isLoading: true,
      data: null,
    }))
    render(renderWithRouter(<PostComment data={propsData} />, '/'))
    expect(screen.getByTestId('postcommentloader')).toBeInTheDocument()
  })

  it('Checks if there is no header after loading', () => {
    render(renderWithRouter(<PostComment data={propsData} />, '/'))
    expect(screen.queryByTestId('postcommentloader')).not.toBeInTheDocument()
  })

  it('Checks if comment renders', () => {
    render(renderWithRouter(<PostComment data={propsData} />, '/'))
    expect(screen.queryByText('My comment')).toBeInTheDocument()
  })

  it("Checks if autor's header contains proper data", () => {
    const dateFromPropsData = moment
      .unix(propsData.time / 1000)
      .format('DD/MM/YY')
    render(renderWithRouter(<PostComment data={propsData} />, '/'))
    expect(
      screen.queryByText(mockedGetUserData.displayName)
    ).toBeInTheDocument()
    expect(screen.queryByText(dateFromPropsData)).toBeInTheDocument()
  })
})
