<?php

namespace Database\Seeders;

use App\Models\Partners;
use Illuminate\Database\Seeder;

class PartnersSeeder extends Seeder
{
  
    public function run()
    {
        $arrPartners = [
            [
                'Blanc Mesnil Foundation',
                'The Blanc Mesnil Foundation supports the training of our students in our centre in Vietnam [Da Nang] for 3 years',
                'logo_blancmesnil-400x284.png',
                'https://unespritdefamille.org/blancmesnil/'
            ],
            [
                'Danang Vocational Training College',
                'PN Vietnam students have started studying in Danang Vocational Training College since September 2017.',
                'DVT-400x284.png',
                'http://danavtc.edu.vn/'
            ],
            [
                'Enouvo IT Solutions',
                '',
                'Enouvo-1-400x284.png',
                'https://enouvo.com/'
            ],
            [
                'Amanjaya Fondation ',
                'Created in 2008, Amanjaya Foundation supports organizations that work to promote access to education for disadvantaged children and young people. Since 2008, Amanjaya Foundation supports Passerelles numériques.',
                'logo_FondationAmanjaya-400x284.png',
                'https://www.amanjaya.org/'
            ],
            [
                'JPMorgan Chase & Co',
                'JP Morgan Chase Foundation is an important sponsor to PN in Vietnam and The Philippines, to support our training programs, prepare the students to a successful professional life, establish local partnerships with NGOs, universities, companies, to work together and combine their effort for underprivileged youth.',
                'J.P.Morgan.jpg',
                'https://www.jpmorganchase.com/impact'
            ],
            [
                'KMS Technology',
                'Starting from 2018, KMS Technology, a US-based global technology company, has announced its partnership with PN Vietnam, as part of its commitment to support the community. Besides providing financial support, KMS helps PNV by equipping the laboratory; providing specialized workshops & training courses conducted by its experts and several internship opportunities for PNV students. With the most up-to-date knowledge and hands-on experience in the IT industry; KMS aims to help PNV students have a fair and better employment opportunity in the future.',
                'KMS-Technology-400x284.png',
                'https://www.kms-technology.com/'
            ],
            [
                'Laidon',
                'Since 2021, Laidon support us in internship and mentoring our students in Graduation Project.',
                'Laidon-400x284.png',
                'https://laidon.com/'
            ],
            [
                'LeKhanhTech',
                'Since 2020, LeKhanhTech has been supporting our specialization module over 3 years.',
                'LeKhanhTech-1-400x284.png',
                'https://lekhanhtech.com/'
            ],
            [
                'LinkByNet',
                'LinkByNet sponsored PNV in 2016, 2018, and 2020.',
                'linkbynet-400x284.png',
                'https://www.linkbynet.com/'
            ],
            [
                'Luciole Foundation',
                'The Luciole Foundation supports the training of our students in our centre in Vietnam [Da Nang] for 3 years',
                'Logo_Luciole.png',
                'https://www.institutdefrance.fr/lesfondations/prix-fondations-fondation-luciole/'
            ],
            [
                'Microsoft',
                'Since 2017 Microsoft is actively supporting PN’s actions with a comprehensive approach including funding, software licences donation, the creation of an integrated student management system, volunteering and much more!',
                'microsoft-logo-400x284.jpg',
                'https://www.microsoft.com/en/'
            ],
            [
                'Motorola Solutions Foundation ',
                'Since 2017, the Motorola Solutions Foundation supports the implementation of our innovative "hubs", holistic, student-centered digital and education Project for underserved youth in Vietnam and the Philippines.',
                'motorola-solutions-foundation-400x284.png',
                'https://www.motorolasolutions.com/en_us/about/company-overview/corporate-responsibility/motorola-solutions-foundation.html'
            ],
            [
                'PYCO Group',
                'In 2016, PYCO Group, a digital consulting and software development agency, kick-started a long-term partnership with Passerelles numériques Vietnam as part of its commitment to support charity organizations in Vietnam. With the theme  A digital strategy is all about passion , the partnership entails offering 2 programs:
                Internships: Welcoming third-year students for their 5-month internship at the PYCO offices in Ho Chi Minh city.
                Training courses: Providing training through on-site workshops and online presentations that focus on cutting-edge digital technologies.',
                'PYCO_Square-400x284.png',
                'https://pycogroup.com/home'
            ],
            [
                ' Thales South-East Asia',
                'Since March 2016, Thales South-East Asia supports our programs in Cambodia, Vietnam and the Philippines with financial support and skill-volunteering.',
                'Thales_logo.jpg',
                'https://www.thalesgroup.com/en/countries/asia-pacific/singapore'
            ],
            [
                'A better Vietnam',
                '',
                'A-better-Vietnam.png',
                'https://abettervietnam.org/home'
            ],
            [
                'AgilityIO',
                '',
                'Agility-IO.png',
                'https://www.agilityio.com/'
            ],
            [
                'Axon Active',
                '',
                'Axon-logoPNwebsite.png',
                'https://www.axonactive.com/'
            ],
            [
                'BAP',
                '',
                'BAP-510x382.png',
                'https://bap-software.net/en/'
            ],
            [
                'Code Complete',
                '',
                'Code-Complete.png',
                'https://codecomplete.jp/'
            ],
            [
                'Code Engine',
                '',
                'Code-engine.png',
                'https://www.codeenginestudio.com/'
            ],
            [
                'Danang Go',
                '',
                'Danang-Go.png',
                'https://www.dananggo.org/'
            ],
            [
                'Green System Solutions',
                '',
                'Green-System-Solutions.png',
                'https://www.greensystem.vn/en'
            ],
            [
                'LogiGear',
                '',
                'Logigear-logo.png',
                'https://www.logigear.com/'
            ],
            [
                'mgm',
                '',
                'mgm.png',
                'https://www.mgm-tp.com/en/'
            ],
            [
                'Neolab Vietnam',
                '',
                'Neolab.png',
                'https://neo-lab.vn/'
            ],
            [
                'Orient',
                '',
                'Orient.png',
                'https://www.orientvietnam.com/'
            ],
            [
                'SeaDev',
                '',
                'seadev.png',
                'https://seadev.us/'
            ],
            [
                'Sunbytes',
                '',
                'Sunbytes.png',
                'https://sunbytes.io/'
            ]
        
        ];
        foreach($arrPartners as $a){
            $partner = new Partners();
            $partner->name =$a[0];
            $partner->description = $a[1];
            $partner->img = $a[2];
            $partner->link = $a[3];
            $partner->save();
        }
    }
}
