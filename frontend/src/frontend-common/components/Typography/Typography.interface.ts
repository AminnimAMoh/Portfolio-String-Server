export type VariantType=  
| 'h1'
| 'h2'
| 'h3'
| 'smallBody'
| 'body'
| 'bigBody'
| 'button'
| 'link'
| 'caption'
| 'label';

export interface TypographyProps extends HTMLDivElement {
    variant: VariantType
}