//Quiz - 마이FAQ
import {
    BackGround,
    Wrapper, 
    ImageWrapper, 
    SearchImg, 
    WriterWrapper,
    ProfileWrapper,
    ProfileImg,
    Label1,
    Label2,
    Arrow1Img,
    MenuWrapper,
    Label3,
    Label4,
    ContentWrapper,
    FaqWrapper,
    LabelWrapper,
    LabelQ,
    LabelFAQ,
    ArrowImg,
    EmoteWrapper,
    HomeWrapper,
    HomeImg,
    LocationWrapper,
    LocationImg,
    LikeWrapper,
    LikeImg,
    MyWrapper,
    MyImg,
    Label5,
    Label6,

} from '../../styles/emotion1'

export default function MyFAQ() {
    
    return (
        <BackGround>    
            <Wrapper>

                <ImageWrapper>
                    <SearchImg src ="/img/search.png"></SearchImg>
                </ImageWrapper>

                <WriterWrapper>

                    <Label1>마이</Label1>
                    

                    <ProfileWrapper>
                        <ProfileImg src="/img/profile.png"></ProfileImg>
                        <Label2>임정아</Label2>
                        <Arrow1Img src="/img/arrow1.png"></Arrow1Img>
                    </ProfileWrapper>

                </WriterWrapper>

                <MenuWrapper>
                    <Label3>공지사항</Label3>
                    <Label3>이벤트</Label3>
                    <Label4>FAQ</Label4>
                    <Label3>Q&amp;A</Label3>
                </MenuWrapper>

                <ContentWrapper>

                    <FaqWrapper>
                        
                        <LabelWrapper>
                            <LabelQ>Q.01</LabelQ>
                            <LabelFAQ>리뷰작성은 어떻게 하나요?</LabelFAQ>
                        </LabelWrapper>

                            <ArrowImg src="/img/arrow.png"></ArrowImg>
                        

                    </FaqWrapper>

                    <FaqWrapper>
                        
                        <LabelWrapper>
                            <LabelQ>Q.02</LabelQ>
                            <LabelFAQ>리뷰 수정/삭제는 어떻게 하나요?</LabelFAQ>
                        </LabelWrapper>
                        <ArrowImg src="/img/arrow.png"></ArrowImg>
                        
                        
                    </FaqWrapper>

                    <FaqWrapper>
                        
                        <LabelWrapper>
                            <LabelQ>Q.03</LabelQ>
                            <LabelFAQ>아이디/비밀번호를 잊어버렸어요.</LabelFAQ>
                        </LabelWrapper>
                            <ArrowImg src="/img/arrow.png"></ArrowImg>

                    </FaqWrapper>

                    <FaqWrapper>
                        
                        <LabelWrapper>
                            <LabelQ>Q.04</LabelQ>
                            <LabelFAQ>회원탈퇴를 하고 싶어요.</LabelFAQ>
                        </LabelWrapper>
                            <ArrowImg src="/img/arrow.png"></ArrowImg>
                        
                    </FaqWrapper>

                    <FaqWrapper>
                        
                        <LabelWrapper>
                            <LabelQ>Q.05</LabelQ>
                            <LabelFAQ>출발지 설정은 어떻게 하나요?</LabelFAQ>
                        </LabelWrapper>
                            <ArrowImg src="/img/arrow.png"></ArrowImg>
                        
                    </FaqWrapper>

                    <FaqWrapper>
                        
                        <LabelWrapper>
                            <LabelQ>Q.06</LabelQ>
                            <LabelFAQ>비밀번호를 변경하고 싶어요.</LabelFAQ>
                        </LabelWrapper>
                    
                            <ArrowImg src="/img/arrow.png"></ArrowImg>
                        
                    </FaqWrapper>

                </ContentWrapper>

                <EmoteWrapper>

                    <HomeWrapper>
                        <HomeImg src="/img/home.png"></HomeImg>
                        <Label5>홈</Label5>
                    </HomeWrapper>

                    <LocationWrapper>
                        <LocationImg src="/img/location.png"></LocationImg>
                        <Label5>잇츠로드</Label5>
                    </LocationWrapper>

                    <LikeWrapper>
                        <LikeImg src="/img/like.png"></LikeImg>
                        <Label5>마이찜</Label5>
                    </LikeWrapper>

                    <MyWrapper>
                        <MyImg src="/img/my.png"></MyImg>
                        <Label6>마이</Label6>
                    </MyWrapper>

                </EmoteWrapper>

            </Wrapper>
        </BackGround>    
        )
}