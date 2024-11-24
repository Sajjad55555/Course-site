import React from 'react'

export default function About_farm() {
  return (
    <>
    <div className=' flex justify-center items-center w-full rounded-xl h-full'>
        <div className=' w-full max-w-[250px] h-[569px]'>
                 <div className='text-[20px] font-extrabold text-black'>
                 브랜드 마케팅 무기학 개론 누구나 쉽게 배우기
                 </div>
                 {/* informaation */}
                 <div className=' flex flex-col gap-2'>
                    <div className='text-[#FF6016] font-semibold text-[14px] flex gap-10 mt-10'>
                        <p >일시</p>
                        <p>07.11 (수) ~ 07.21 (토)</p>
                    </div>
                    <div className='text-[#6D6D6D] font-semibold text-[14px] flex gap-10'>
                        <p>위치</p>
                        <p>서대문구</p>
                    </div>
                    <div className='text-[#6D6D6D] font-semibold text-[14px] flex gap-10'>
                        <p>비용</p>
                        <p>50,000원</p>
                    </div>
                    <div className='text-[#6D6D6D] font-semibold text-[14px] flex gap-10'>
                        <p>참석</p>
                        <p>지원 <span className='text-[#FF6016]'>51</span>  / 모집 <span className='text-[#FF6016]'>1</span></p>
                    </div>
                    <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
                 </div>
                 {/* data div */}
                 <div className='flex flex-col '>
                    <div className='mt-4 text-[16px] font-medium'>제공 내역
                    <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
                    </div>
                    <div className='mt-4 text-[16px] font-medium'>방문 및 예약안내
                    <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
                    </div>
                    <div className='mt-4 text-[16px] font-medium'>강의 안내
                    <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
                    </div>
                    <div className='mt-4 text-[16px] font-medium'>추가 안내사항
                    <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
                    </div>
                 </div>
                 {/* button */}
                 <div className='w-full h-[50px] bg-[#FF6016] flex justify-center items-center mt-8 rounded'>
                     <button className='text-[22px] font-bold text-white'>예약하기</button>
                 </div>
        </div>
    </div>
    
    
    </>
  )
}
