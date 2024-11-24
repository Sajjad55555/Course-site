import { IoStarSharp } from "react-icons/io5";
import Header from '../Components/header';
import About_farm from '../Components/about_farm';
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";



export default function AboutUs() {
  return (
    <div className=' w-full h-auto'>

      {/* Header Section */}
      <Header />
      {/* Body section start */}
      <div className='w-full h-auto flex justify-center mt-[100px] mb-[200px]'>
        {/* body main div */}
        <div className='h-auto w-full max-w-[66.7%]  flex flex-wrap justify-between flex-col md:flex-row items-center md:items-start gap-6 py-4 mx-2'>
          {/* text div */}
          <div className='w-[70.3%] h-auto'>
            {/* div 1 */}
            <div className=' flex gap-16 flex-col md:flex-row items-center md:items-start text-center md:text-start    '>
              {/* title */}
              <div className='text-[18px] font-bold flex'>제공 내역</div>
              {/* dis */}
              <div className='text-[16px] w-[590px]   font-pretendard px-[150px] md:px-[10px] text-base font-normal
                '>
                <p className=' text-[18px] font-bold'>명륜진사갈비 40,000원 이용권</p>
                <p className='mt-6'>[참고사항]</p>
                <p>※ 전국 명륜진사갈비에서 사용 가능한 이용권입니다.</p>
                <p>※ 명륜진사갈비 홈페이지에서 확인 가능</p>
                <p>※ 모바일 이용권으로 제공되며 이용금액 내에서 자유롭게 이용 가능합<br />니다.</p>
                <p>※ 잔액은 환불되지 않습니다. 이용금액 외 추가주문은 결제 부탁드립니<br />다.</p>
                <p>※ 점심 특선 메뉴나 기타 메뉴만 사용 시 이용권 정상 이용 불가합니다.</p>
                <p className='text-[#FF0000] mt-4 flex items-center gap-1'><span><IoStarSharp /></span> '잠실아시아선수촌점, 서충주기업도시점'은 체험 불가 매장입니다.</p>
                <div className="border-b border-[2px] border-[#F5F3F3] mt-8">
                </div>
              </div>
            </div>
            {/* div 2 */}
            <div className=' flex gap-6 flex-col md:flex-row items-center md:items-start text-center md:text-start mt-8   '>
              {/* title */}

              <div className='font-extrabold flex text-[16px]'>방문 및 예약안내</div>
              {/* dis */}
              <div className='text-[16px] w-[590px] font-pretendard px-[150px] md:px-[10px] text-base font-normal
                '>
                <p className="text-[#FF0000] font-extrabold text-sm ">※쿠폰 미수령 시 매장 방문 불가 (반드시 쿠폰 수령하신다음 매장 방문하셔야 합니다!)</p>
                <p className="mt-6">[영업시간 및 방문 안내]</p>
                <Link href={"/"}>
                <p className="flex items-center" ><FaPlay /><span className=" cursor-pointer inline border-b border-black ">매장찾기(클릭)</span></p></Link>
                <p className="flex items-center"><span><IoStarSharp /></span> 체험불가매장: '잠실아시아선수촌점', '서충주기업도시점'</p>
                <p>※ 영업시간 및 예약, 주차 등 문의는 방문하실 매장으로 문의하시기 바랍니</p>
                <p>※ 예약 없이 지점 영업시간 내 방문 가능합니다.</p>
                <p>※ 방문 시 레뷰 체험단임을 밝히지 않으셔도 됩니다.</p>
                <p>※ 체험기간 연장이 불가한 캠페인입니다.</p>
                <p>※ 매장 상황에 따라 웨이팅 발생할 수 있습니다.</p>
                <p className="mt-4">[참고사항]</p>
                <p>※ 7월 25일에 회원정보에 등록된 핸드폰번호로 모바일상품권을 발송해드릴 예정입니다.</p>
                <p>- 업체에서 명단 확인 후 순차 발송 예정입니다. 정확한 발송시간까지는 안내드리기 어려운 점 양해 바랍니다.</p>
                <p>※선정 후 빠른 체험 및 콘텐츠 등록 부탁드립니다.</p>
                <div className="border-b border-[2px] border-[#F5F3F3] mt-8">
                </div>
                
              </div>
            </div>
            {/* div 3 */}
            <div className=' flex gap-20 flex-col md:flex-row items-center md:items-start text-[16px] text-center md:text-start mt-8   '>
              {/* title */}
              <div className='font-extrabold flex'>강의 안내</div>
              {/* dis */}
              <div className='text-[16px] w-[590px]  font-pretendard px-[150px] md:px-[10px] text-base font-normal
                '>
                <p className="flex items-center"><span><IoStarSharp /></span> 신메뉴 소개</p>
                <p className="mt-4">명륜진사갈비 신메뉴 '후려페퍼스테이크' 소개와 함께 나만의 플레이팅 방법을 소개해주세요</p>
                <p className="flex items-center mt-4"><span><IoStarSharp /></span> 매장 소개와 함께 신메뉴 소개</p>
                <p className="mt-4">[명륜진사갈비 소개]</p>
                <p>- 7가지 다양한 고기, 대한민국 고기테마파크</p>
                <p>- '무한리필' 단어 대신 '자유이용' 단어로 사용 요청</p>
                <p>- 돼지갈비+통삽겹살+숯불닭갈비+등갈비프렌치렉+돼지껍데기+목살+신메뉴 후려페퍼스테이크 7종의 고기</p>
                <p>- 특선사이드, 갈비버거, 모듬튀김 등 업그레이드된 셀프바</p>
                <p>- 한층 고급스러워진 인테리어</p>
                <p>- 어린이편의시설(놀이방, 편의점)</p>
                <p>※ 매장에 따라 어린이 편의시설은 상이할 수 있습니다.</p>
                <p className="mt-4">[신메뉴 후려페퍼스테이크 소개]</p>
                <p>- 입안 가득 퍼지는 화끈한 후추의 풍미와 함께, 나만의 스타일로 세팅해 즐길 수 있는 신메뉴</p>
                <p>- 매장 내 '스테이크존'에 소개된 후려페퍼 스테이크 즐기는 방법 소개(고기냉장고 + 스테이크존 섹션)</p>
                <p>- 야채와 함께 감미된 후려페퍼 스테이크를 가져와 구워서, 샐러드바 메뉴와 함께 나만의 스타일로 플레이팅하여</p>
                <p>포크와 나이프를 활용해 먹는 모습 연출</p>
                <div className="border-b border-[2px] border-[#F5F3F3] mt-8">
                </div>
              </div>
            </div>
            {/* div 4 */}
            <div className=' flex gap-12 flex-col md:flex-row items-center  md:items-start text-center md:text-start mt-8  '>
              {/* title */}
              <div className='font-extrabold flex text-[16px]'>추가 안내사항</div>
              {/* dis */}
              <div className=' w-[590px] font-pretendard text-base px-[150px] md:px-[10px] font-normal
                '>
                <p>- 초과비용 본인 부담 / 타쿠폰 중복적용 불가 / 테이크 아웃 불가</p>
                <p>- 업체 측 요청에 따라 선정 인플루언서 수가 변경될 수 있습니다.</p>
                <p>- 예약 후 방문에 어려움이 발생한 경우, 미리 매장 측과 레뷰 양 측에 공유 해주셔야 하며, 예약 후 방문하지 않는 <br/> 노쇼의 경우, 캠페인 참여 제한됩니다.</p>
                <p>- 작성하신 콘텐츠는 6개월 유지 해야 하며, 미유지 시 페널티가 부과됩니다.</p>
                <p>- 공동 블로거의 경우, 레뷰 회원가입 시에 등록한 휴대폰 번호로 예약해주셔야 합니다.</p>
                <p>- 동일 캠페인에 함께 선정된 인플루언서 동반 체험 불가합니다.</p>
                <p>- 지금 레뷰 앱에서 저금통 참여하고 부족한 포인트를 채워보세요.</p>
              </div>
            </div>
          </div>
          {/* apply farm div */}
          <div className='w-[288px] h-[686px] border-[3px] rounded-xl border-black '><About_farm /></div>


        </div>
      </div>
      {/* Body Section end */}
    </div>
  )
}






//    {/* Slide Bar */}
//    <div className='absolute top-[794px] right-8 transform -translate-y-1/2 flex flex-col gap-2'>
//    <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
//      <CiHeart />
//    </div>
//    <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
//      <AiOutlineShoppingCart />
//    </div>
//    <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
//      <MdOutlineHeadsetMic />
//    </div>
//    <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
//      <MdOutlineUpload />
//    </div>
//  </div>

//  {/* Body Section start */}
//  <div className='w-full h-auto flex justify-center mt-10 '>
//    <div className='w-full max-w-[1000px] flex flex-col items-center md:items-start'>
//       <div className='font-semibold text-xl'>Comprehinsive Marketing Class</div>
//       <div className='flex flex-wrap gap-2 mt-4'> <Comprehensiv/></div>
//       <div className='flex flex-wrap gap-6  justify-center'>
//        <AboutCards/>
//       </div>
//    </div>
//  </div>
//  {/* Body Section end */}