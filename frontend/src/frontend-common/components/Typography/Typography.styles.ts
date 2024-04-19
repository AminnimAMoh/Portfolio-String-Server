import styled from 'styled-components';
import { TypographyFontSize, TypographyLineHights, TypographySpacing } from './Typography.constants';
import { TypographyProps } from './Typography.interface';

const StyledH1Typography=`
    font-size: ${TypographyFontSize.H1};
    line-height: ${TypographyLineHights.H1};
    margin: ${TypographySpacing.H1};
`

const StyledH2Typography=`
    font-size: ${TypographyFontSize.H2};
    line-height: ${TypographyLineHights.H2};
    margin: ${TypographySpacing.H2};
`

const StyledH3Typography=`
    font-size: ${TypographyFontSize.H3};
    line-height: ${TypographyLineHights.H3};
    margin: ${TypographySpacing.H3};
`

const StyledSmallBodyTypography=`
    font-size: ${TypographyFontSize.smallBody};
    line-height: ${TypographyLineHights.smallBody};
    margin: ${TypographySpacing.smallBody};
`

const StyledBodyTypography=`
    font-size: ${TypographyFontSize.body};
    line-height: ${TypographyLineHights.body};
    margin: ${TypographySpacing.body};
`

const StyledBigBodyTypography=`
    font-size: ${TypographyFontSize.bigBody};
    line-height: ${TypographyLineHights.bigBody};
    margin: ${TypographySpacing.bigBody};
`

const StyledButtonTypography=`
    font-size: ${TypographyFontSize.button};
    line-height: ${TypographyLineHights.button};
    margin: ${TypographySpacing.button};
`

const StyledLinkTypography=`
    font-size: ${TypographyFontSize.link};
    line-height: ${TypographyLineHights.link};
    margin: ${TypographySpacing.link};
`

const StyledCaptionTypography=`
    font-size: ${TypographyFontSize.caption};
    line-height: ${TypographyLineHights.caption};
    margin: ${TypographySpacing.caption};
`

const StyledLabelTypography=`
    font-size: ${TypographyFontSize.label};
    line-height: ${TypographyLineHights.label};
    margin: ${TypographySpacing.label};
`

export const StyledTypographyContainer = styled.div<TypographyProps>`
    ${props=>{
        switch (props.variant) {
            case 'h1':
                    return StyledH1Typography
            case 'h2':
                    return StyledH2Typography
            case 'h3':
                    return StyledH3Typography
            case 'smallBody':
                    return StyledSmallBodyTypography
            case 'body':
                    return StyledBodyTypography
            case 'bigBody':
                    return StyledBigBodyTypography
            case 'button':
                    return StyledButtonTypography
            case 'link':
                    return StyledLinkTypography
            case 'caption':
                    return StyledCaptionTypography
            case 'label':
                    return StyledLabelTypography
        
            default:
                return
    }}}
`;
