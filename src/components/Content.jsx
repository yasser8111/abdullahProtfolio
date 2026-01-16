import React from 'react';
import GlassBox from './GlassBox';

function Content() {
  return (
   <section id="about" className="relative min-h-screen flex overflow-hidden items-center justify-center mb-20">
    <GlassBox>
      <table className="w-full text-white">
        <tbody>
          <tr>
            <td className="p-10 text-center text-2xl">المقدمة</td>
            <td className="p-10 text-center text-2xl">عن الشركة</td>
            <td className="p-10 text-center text-2xl">الخدمات</td>
          </tr>
          <tr>
            <td className="p-10 text-center text-2xl">المشاريع</td>
            <td className="p-10 text-center text-2xl">الفريق</td>
            <td className="p-10 text-center text-2xl">اتصل بنا</td>
          </tr>
        </tbody>
      </table>
    </GlassBox>
   </section>
  );
}

export default Content;