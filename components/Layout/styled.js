import styled from 'styled-components'
import { subtleFontColor, containerBoxShadow, contentBackgroundColor } from '../../ui/constants'

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-shadow: ${containerBoxShadow};
    background: ${contentBackgroundColor};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
export const Time = styled.time`
    color: ${subtleFontColor};
    font-size: 1rem;
    line-height: 30px;
    margin-right: 3px;
`