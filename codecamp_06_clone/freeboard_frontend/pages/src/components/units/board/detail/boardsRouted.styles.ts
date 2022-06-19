import styled from "@emotion/styled";

export const BackGround =styled.div`
    width: 100%;
    height: 100%;
`

export const Entire = styled.div`
    width: 1200px;
    margin: 100px;
    display: flex;
    flex-direction: column;


    /* padding-left: 102px; */
    /* align-items: center; */
`

export const Wrapper = styled.div`
    width: 1200px;
    /* height: 1847px; 굳이 픽스할 필요가 없이 자식들에 의해 결정됨 */
    border: 1px solid black;
    /* margin: 100px; */
    padding: 20px 102px 80px 102px;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    border: none;
    box-shadow: 0px 0px 10px gray;
`


export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* justify-content: flex-end; */
`


export const TextImg = styled.img`

    width: 376px;
    height: 64px;

    display: flex;
    justify-content: flex-end;
    background-color: gray;
`

export const PolygonImg = styled.div`
    width: 12px;
    height: 8px;
    background: linear-gradient(45deg, white 50%, gray 50% );

    /* display: flex; */
    /* justify-content: flex-end; */
    /* background-color: gray; */
`


export const WrapperTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-bottom: 20px;
    border-bottom: 1px solid gray;
`

export const WrapperTopLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const WrapperTopLeftProfile = styled.div`
    display: flex;
    flex-direction: row;
`

export const ProfileImg = styled.img`
    width: 47px;
    height: 47px;
`

export const WriterDate = styled.div`
    /* display: flex; */
    flex-direction: row;
`

export const Writer = styled.div`
    font-size: 24px;
    font-weight: 500, Medium;
`

export const CreatedAt = styled.div`
    font-size: 16px;
`

export const WrapperTopRight = styled.div`
    width: 96px;
    height: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around; 
`

export const ChainImg = styled.img`
    width: 27.67px;
    height: 13.33px;
`
export const LocationImg = styled.img`
    width: 18.67px;
    height: 26.67px;
`

export const WrapperBody = styled.div`
    padding-top: 80px;
`

export const TitleWrapper = styled.div`
    
    
`

export const Title = styled.div`
    font-size: 36px;
    font-weight: 700, Bold;
`

export const ContentsWrapper = styled.div`
    padding-top: 40px;
`

export const ContentsImg = styled.img`
    width: 996px;
    height: 480px;

`

export const Contents = styled.div`
    padding-top: 40px;
`

export const YoutubeWrapper = styled.div`
    padding-top: 120px;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    /* align-items: center; */
`

export const YoutubeUrl = styled.iframe`
    width: 486px;
    height: 240px; 
`
// export const YoutubeUrl = styled.img`
//     width: 486px;
//     height: 240px; 
// `




export const WrapperFooter = styled.div`
    width: 100%;
    height: 51px;
    padding: 160px 438px 0px 438px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const WrapperLike = styled.div`
    flex-direction: column;

`

export const LikeImg = styled.img`
    width: 20px;
    height: 18px;
`

export const LikeCount = styled.div`
    font-size: 18px;
    color: yellow;
`

export const WrapperDisLike = styled.div`
    flex-direction: column;
`

export const DisLikeImg = styled.img`
    width: 22px;
    height: 20px;
`

export const DisLikeCount = styled.div`
    font-size: 18px;
    color: gray;
`


export const ButtonWrapper = styled.div`
    width: 100%;
    height: 45px;
    padding: 20px 102px 80px 102px;
    border-bottom: 1px solid gray;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SubmitButton = styled.button`
    width: 179px;
    height: 45px;
    font-size: 16px;
    font-weight: 400;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row; //있어도 되고 없어도 된다.
`

