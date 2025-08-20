import Alpine from 'alpinejs';
import VanillaTilt from 'vanilla-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import Chart from 'chart.js/auto';
import { color } from 'chart.js/helpers';
import particlesJS from 'particles.js';
import Typed from 'typed.js';

AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
  
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

window.Alpine = Alpine;


Alpine.store('darkMode', {
    dark: false,

    init() {
        const darkModePreference = localStorage.getItem('theme');
        ((darkModePreference === 'dark' && (this.dark = true)) || darkModePreference === 'light' && (this.dark = false)) && (this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches)
        // (darkModePreference === 'dark' && (this.dark = true)) ?? (this.dark = false)
        this.updateDocumentClass();
    },
    toggleMode() {
        this.dark = !this.dark;
        localStorage.setItem('theme', this.dark ? 'dark' : 'light');
        this.updateDocumentClass();
    },

    updateDocumentClass() {
        this.dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }
});

Alpine.data('setVisible', () => ({ popUp: false, navOn: false }));

Alpine.data('heroIndex', () => ({
    setCanvasAbsolute(){
        const getElCanvas = document.querySelector('.particles-js-canvas-el');
        if (getElCanvas) {
            getElCanvas.classList.add('absolute');
        }
    },
    typing(){
        new Typed('#typed-list', {
            strings: ['<span class="dark:text-blue-300">Wahyudi</span>;','<span class="dark:text-blue-300">Fullstack</span> Developer;', '<span class="dark:text-blue-300">Flutter</span> development enthusiast;', '<span class="dark:text-blue-300">Informatic student</span>;'],
            loop: true,
            autoInsertCss: true,
            backDelay: 1500,
            typeSpeed: 100,
            backSpeed: 100,
        })
    }
}));

Alpine.data('project', () => ({
    recently: [
        {
            title: 'UniHub - App',
            image: '../dist/img/unihub-app.png',
            delay: 0,
            demo: '',
            repo: '',
            desc: 'Mobile application designed to facilitate communication and collaboration among student organizations. It provides features for sharing information with Generative AI integration for content generation, membership management, and finance management.',
            mobile: true,
            web: true,
            api: false,
            desktop: false
        },
        {
            title: 'Siapguna Mobile',
            image: '../dist/img/siapguna-mobile.png',
            delay: 0,
            demo: '',
            repo: '',
            desc: 'Siapguna mobile is a mobile application designed to support the Santri Siap Guna program at LPM DT Peduli.',
            mobile: true,
            web: false,
            api: false,
            desktop: false
        },
        {
            title: 'PlantIO App',
            image: '../dist/img/plantio-mockup.png',
            delay: 0,
            demo: '',
            repo: 'https://github.com/mwahyudihd/plantio_app',
            desc: 'PlantIO is a mobile application that helps users to monitor and control the growth of plants using IoT technology. This project was created for assignment project from college',
            mobile: true,
            web: false,
            api: false,
            desktop: false
        }
    ],
    data: [
        {
            title: 'Unihub – A Platform for Student Organizations',
            icon: ['https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000', 'https://img.icons8.com/?size=100&id=rnK88i9FvAFO&format=png&color=000000'],
            desc: 'UniHub is a mobile application designed to facilitate communication and collaboration among student organizations. It provides features for sharing information with Generative AI integration for content generation, membership menagement, and finance management. This project was created for assignment project from college.',
            demo: '',
            repo: '',
            poster: '../dist/img/unihub-app.png'
        },
        {
            title: 'SantriSiapMobile - Mobile App for Santri Siap Guna Program',
            icon: ['https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000', 'https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=000000'],
            desc: 'siapguna mobile is a mobile application designed to support the Santri Siap Guna program. It provides features for students to access educational resources, track their progress, and engage with the program effectively with local database for quran. This project was created by internship program at Lembaga Pengabdian Masyarakat (LPM) Darut Tauhid Peduli (2.5 month).',
            demo: '',
            repo: '',
            poster: '../dist/img/siapguna-mobile.png'
        },
        {
            title: 'PlantIO – Smart IoT Mobile App for Plant Monitoring and Watering Automation',
            icon: ['https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000'],
            desc: 'PlantIO is a mobile application that helps users to monitor and control the growth of plants using IoT technology. This project was created for assignment project from college',
            demo: '',
            repo: 'https://github.com/mwahyudihd/plantio_app',
            poster: '../dist/img/plantio-mockup.png'
        },
        {
            title: 'Todo App',
            icon: ['https://cdn.worldvectorlogo.com/logos/alpinejs-2.svg','https://www.chartjs.org/img/chartjs-logo.svg', 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000'],
            desc: 'A simple and responsive to-do list application built using Tailwind CSS and Alpine.js. This project is designed to help you manage and organize your daily tasks efficiently.',
            demo: 'https://mwahyudihd.github.io/todo-app/',
            repo: 'https://github.com/mwahyudihd/todo-app',
            poster: '../dist/gif/todo-app.gif'
        },
        {
            title: 'Debtwriter web - app',
            icon: ['https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png', 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000', 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000', 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'],
            desc: 'This project is a web application for recording personal debts and notes.',
            demo: '',
            repo: 'https://github.com/mwahyudihd/debtwriter-app.git',
            poster: '../dist/gif/debtwriter-ci4.gif'
        },
        {
            title: 'Fotocopy App (Point of Sale)',
            icon: ['https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000'],
            desc: 'This application is developed using Flutter, providing a seamless and engaging user experience.',
            demo: '',
            repo: 'https://github.com/mwahyudihd/fotocopy-app2',
            poster: '../dist/img/fotocopy-app.png'
        },
        {
            title: 'Fotocopy - Api',
            icon: ['https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png', 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000'],
            desc: 'This API was created as a beckend project of the Fotocopy app (Flutter mobile).',
            demo: 'https://wahyudi.barudakkoding.com/fotocopy-api/public/produk/',
            repo: 'https://github.com/mwahyudihd/fotocopy-api',
            poster: ''
        },
        {
            title: 'Web app debtwriter',
            icon: ['https://avatars.githubusercontent.com/u/5658226?s=48&v=4', 'https://img.icons8.com/?size=100&id=puL87ypQPxxr&format=png&color=000000', 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000'],
            desc: 'This project is a web application for recording personal debts. It uses Express.js as the backend and MongoDB as its database.',
            demo: '',
            repo: 'https://github.com/mwahyudihd/debt-writer',
            poster: '../dist/gif/web-debtwriter-mongo.gif'
        },
        {
            title: 'Rancangbangun Aplikasi marketplace Tanaman hias (Eflower)',
            icon: ['https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000','https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000','https://img.icons8.com/?size=100&id=HKNzD81eiiSc&format=png&color=000000', 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000'],
            desc: 'Eflower is a website-based application a Marketplace for the sale of ornamental plants. this application is built to fulfill the project 1 course.',
            demo: '',
            repo: 'https://github.com/mwahyudihd/web-eflower',
            poster: '../dist/gif/web-eflower.gif'
        },
        {
            title: 'Debter App',
            icon: ['https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000'],
            desc: 'Debter is a Flutter app, this project was created for educational purposes. The app is designed to help users record debts, delete records, mark payments, and use a calculator for debt management purposes.',
            demo: '',
            repo: 'https://github.com/mwahyudihd/debter',
            poster: '../dist/gif/debter-app.gif'
        }
        // {
            //     title: '',
        //     icon: [],
        //     desc: '',
        //     demo: '',
        //     repo: '',
        //     optional showcase or poster attribute
        // }
    ],
    limitItems: 6,
    currentPage: 1,
    get totalPage(){
        return Math.ceil(this.data.length / this.limitItems);
    },
    get paginatedPage(){
        const start = (this.currentPage - 1) * this.limitItems;
        const end = this.limitItems * this.currentPage;
        return this.data.slice(start, end);
    },
    setPage(index){
        this.currentPage = index;
        // this.$nextTick(() => this.set3D());
    },
    prevPage(){
        if (this.currentPage > 1) {
            this.currentPage--;
            // this.$nextTick(() => this.set3D());
        }
    },
    nextPage(){
        if (this.currentPage < this.totalPage) {
            this.currentPage++;
            // this.$nextTick(() => this.set3D());
        }
    },
    // init(){
    //     this.$nextTick(() => this.set3D());
    // },
    // set3D(){
    //     VanillaTilt.init(document.querySelectorAll('.card-project'), {
    //         max: 25,
	// 	    speed: 400
    //     });
    // }
    
}));

emailjs.init({ publicKey: 'cFxuzO7Yg5fsz4nLv' });

Alpine.data('msg', () => ({
    email: '',
    subject: '',
    message: '',
    loading: false,
    success: false,
    wrong: false,
    errorServer: false,
    successPending: null,
    wrongPending: null,
    serverPending: null,
    
    setSucces(){
         this.success = true;
    },
    setServerError(){
        this.errorServer = true;
    },
    setError(){
         this.wrong = true;
        
    },

    closeWrongAlert(){
        this.wrong = false;
    },
    closeErrorAlert(){
        this.errorServer = false;
    },
    closeSuccessAlert(){
        this.success = false;
    },

    sendEmail() {
        const formData = {
            subject: this.subject,
            email: this.email,    
            message: this.message 
        };


        if (this.subject && this.email && this.message) {
            this.loading = true;

            
            emailjs.send('service_a62p66i', 'template_h3s58ph', formData)
                .then(() => {
                    this.loading = false;
                    this.setSucces();
                    if (this.successPending) {
                        clearTimeout(this.successPending);
                    }
                    this.email = '';
                    this.subject = '';
                    this.message = '';
                    this.successPending = setTimeout(() => this.closeSuccessAlert(), 3000);
                    
                })
                .catch((error) => {
                    this.loading = false;
                    this.setServerError();
                    if (this.serverPending) {
                        clearTimeout(this.serverPending);
                    }
                    this.serverPending = setTimeout(() => this.closeErrorAlert(), 3000);
                });
        } else {
            this.setError();
            if (this.wrongPending) {
                clearTimeout(this.wrongPending);
            }
            this.wrongPending = setTimeout(() => this.closeWrongAlert(), 3500);

        }
    }
}));

//footer components
Alpine.data('footer', () => ({
    link: [
        {
            svg: `<svg class="dark:group-hover:fill-dark group-hover:fill-primary fill__iconbutton" viewBox="0 0 20 20" fill="#252525" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"></path></g></svg>`,
            url: 'https://github.com/mwahyudihd'
        },
        {
            svg: `<svg class="fill__iconbutton" width="64px" height="64px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-instagram" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z" class="ease-in-out duration-500 fill-dark dark:group-hover:fill-dark group-hover:fill-primary dark:fill-primary"></path></g></svg>`,
            url: 'https://www.instagram.com/muhammad_w.h/'
        },
        {
            svg: `<svg class="group-hover:fill-primary dark:group-hover:fill-dark fill__iconbutton" fill="#252525" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="-117.76 -117.76 747.52 747.52" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path style="display: inline; fill-rule: evenodd; clip-rule: evenodd;" d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"> </path> </g> </g></svg>`,
            url: 'https://www.linkedin.com/in/muhammad-wahyudi-hidayatullah'
        },
        {
            svg: '<svg class="group-hover:fill-primary dark:group-hover:fill-dark fill__iconbutton" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" class="ease-in-out duration-500 fill-dark dark:group-hover:fill-dark group-hover:fill-primary dark:fill-primary"></path> </g></svg>',
            url: 'https://discord.com/invite/f8GBJuWK'
        }
    ]
}));

//quick contact
Alpine.data('main', () => ({
    quickContact: `<div class="text-dark dark:text-primary h-full w-auto mx-20 flex flex-wrap justify-evenly md:justify-center">
                <h1 data-aos="fade-left" data-aos-delay="500" data-aos-duration="700" class="my-3 self-center text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">Get in Touch, Instantly!</h1>
                <h3 data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" class="my-3 text-sm font-semibold md:text-lg lg:text-xl xl:text-2xl">Your ideas matter. Let’s connect and make something amazing together!</h3>
                <button data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="700" class="primary__button text-sm md:text-base lg:text-lg xl:text-xl px-3 mx-auto self-center flex group" @click="popUp = !popUp">Send me Message Quickly <span class="group-hover:scale-150 scale-125 icon__button"><img :src="$store.darkMode.dark ? '../dist/img/mail-default.svg' : '../dist/img/mail-inverse.svg'" alt="icon"></span></button>
            </div>`
}));

//navbar
Alpine.data('navbar', () => ({
    toggle: `<button @click="navOn = ! navOn" class="flex relative md:invisible mx-2">
                    <svg class="w-5 h-5 hover:scale-95 transition ease-in-out duration-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="w-[50px] lg:h-[30px] mx-2 rounded-full bg-primary dark:bg-dark border h-[21.4px] dark:border-second relative border-dark">
                    <label x-show="$store.darkMode.dark == false" x-transition.duration.1000ms x-transition:leave.right x-transition:enter.right class="cursor-pointer bg-dark border rounded-full size-5 lg:size-7 hover:rotate-45 transition duration-300 ease-in-out absolute" for="theme" @click="$store.darkMode.toggleMode()">
                        <img class="p-1" src="../dist/img/dark-theme-svgrepo-com.svg">
                    </label>
                    <label x-show="$store.darkMode.dark == true" x-transition.duration.1000ms x-transition:enter.left x-transition:leave.left class="cursor-pointer border border-dark bg-primary right-0 hover:rotate-45 transition duration-300 ease-in-out rounded-full size-5 lg:size-7 absolute" for="theme" @click="$store.darkMode.toggleMode()">
                        <img src="../dist/img/light-svgrepo-com.svg">
                    </label>
                    <input class="hidden" type="checkbox" id="theme">
                </div>`,
    homeNav: [
        { 
            url:'#content',
            title: 'Home'
         },
        { 
            url:'about.html',
            title: 'About'
         },
        { 
            url:'project.html',
            title: 'Projects'
         },
        { 
            url:'contact.html',
            title: 'Contact'
        }
    ],
    projectNav: [
        { 
            url:'index.html',
            title: 'Home'
         },
        { 
            url:'about.html',
            title: 'About'
         },
        { 
            url:'#content',
            title: 'Projects'
         },
        { 
            url:'contact.html',
            title: 'Contact'
        }
    ],
    aboutNav: [
        { 
            url:'index.html',
            title: 'Home'
        },
        { 
            url:'#content',
            title: 'About'
        },
        { 
            url:'project.html',
            title: 'Projects' 
        },
        { 
            url:'contact.html',
            title: 'Contact'
        }
    ],
    contactNav: [
        { 
            url:'index.html',
            title: 'Home'
         },
        { 
            url:'about.html',
            title: 'About'
         },
        { 
            url:'project.html',
            title: 'Projects'
         },
        { 
            url:'#quick-contact',
            title: 'Contact'
        }
    ],
}));

//popup component
Alpine.data('popUpComponent', () => ({
    messagePopUp: `<div x-show="popUp" class="body__cover"></div>
            <div x-show="popUp"
            @click.outside="popUp = false" x-transition:.enter.scale.90 x-transition:leave.opacity.left 
            class="text-dark dark:text-primary z-[1001] dark:bg-dark dark:bg-opacity-60 dark:backdrop-blur-lg fixed overflow-hidden popup-content max-w-[450px] top-1/2 left-1/2 backdrop-blur-xl bg-opacity-60 shadow-xl shadow-darkCard transition-all ease-in-out duration-300 p-[27px] rounded-lg bg-primary" >
                <button class="absolute right-0 top-0 m-3 hover:rotate-180 transition duration-500 ease-in-out" @click="popUp = false">
                    <img class="size-[30px]" :src="! $store.darkMode.dark ? '../dist/img/close-light.svg' : '../dist/img/close-dark.svg'">
                </button>
                <h1 class="mb-1 font-semibold text-xl text-center">Quick Message</h1>
                <p class="mb-1 mx-2 font-poppins text-sm text-justify">Hi There 👋, Lets send me Any Questions or Messages.</p>
                <div class="m-2 mx-auto">
                    <form class="mx-auto" @submit.prevent="sendEmail">
                        <div class="m-1">
                            <label for="email" class="mx-2">Email</label>
                            <input id="email" x-model="email" name="bcc" class="input__box" placeholder="yourEmail@example.com" type="email">
                        </div>
                        <div class="m-1">
                            <label for="subject" class="mx-2">Subject</label>
                            <input id="subject" x-model="subject" class="input__box" placeholder="Request: any title." type="text">
                        </div>
                        <div class="m-1">
                            <label for="message" class="mx-2">Body</label>
                            <textarea class="textarea__input" x-model="message" name="body" id="message" placeholder="Message"></textarea>
                        </div>
                        <div class="mx-auto max-w-max">
                            <button class="primary__button group px-1 pl-2 flex" type="submit">Send <span class="icon__button group-hover:scale-125 group-hover:pl-3 delay-500"><img :src="$store.darkMode.dark ? '../dist/img/plane.svg' : '../dist/img/light-plane.svg'"></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div x-html="notify"></div>`,
    notify: `<div x-show="success" x-transition.duration.500ms>
            <div class="cursor-default fixed md:top-[18%] top-1 left-0 lg:left-[71.1%] border rounded-xl transition-all ease-in-out duration-700 w-[350px] h-[80px] md:h-[85px] md:text-xl bg-opacity-75 backdrop-blur-lg z-[9000] bg-primary dark:bg-darkCard text-dark dark:text-primary">
                <h1 class="px-3 text-center font-bold w-full py-1 relative">Yay!, <span class="absolute right-0 top-0 pr-4 group m-1 mr-2 scale-150"><button @click="closeWrongAlert"><svg class="absolute  top-1 group-hover:rotate-180 transition-all ease-in-out duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" :stroke="$store.darkMode.dark ? '#ffff' : '#252525'" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" :stroke="$store.darkMode.dark ? '#fff' : '#252525'" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button></span></h1>
                <p class="px-3 text-justify text-sm font-semibold">Your message was sent successfully.</p>
                <p class="text-left text-sm px-3 float-end dark:text-blue-500 text-blue-900">Status: Success.</p>
            </div>
        </div>
        <div x-show="wrong" x-transition.duration.500ms>
            <div class="cursor-default fixed md:top-[18%] top-1 left-0 lg:left-[71.1%] border rounded-xl transition-all ease-in-out duration-700 w-[350px] h-[100px] md:h-[105px] md:text-xl bg-opacity-75 backdrop-blur-lg z-[9000] bg-red-900 text-primary">
                <h1 class="px-3 text-center font-bold w-full py-1 relative">Ops!, <span class="absolute right-0 top-0 pr-4 group m-1 mr-2 scale-150"><button @click="closeWrongAlert"><svg class="absolute top-1 group-hover:rotate-180 transition-all ease-in-out duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button></span></h1>
                <p class="px-3 text-justify text-sm font-semibold">The form you sent is not complete, please complete it first.</p>
                <p class="text-left text-sm px-3 float-end text-yellow-300">Status: #404</p>
            </div>
        </div>
        <div x-show="errorServer" x-transition.duration.500ms>
            <div class="cursor-default fixed md:top-[18%] top-1 left-0 lg:left-[71.1%] border rounded-xl transition-all ease-in-out duration-700 w-[350px] h-[100px] md:h-[105px] md:text-xl bg-opacity-75 backdrop-blur-lg z-[9000] bg-red-900 text-primary">
                <h1 class="px-3 text-center font-bold w-full py-1 relative">Ops!, <span class="absolute right-0 top-0 pr-4 group m-1 mr-2 scale-150"><button @click="closeWrongAlert"><svg class="absolute top-1 group-hover:rotate-180 transition-all ease-in-out duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button></span></h1>
                <p class="px-3 text-justify text-sm font-semibold">There is an error on the server please use another method.</p>
                <p class="text-left text-sm px-3 float-end text-yellow-300">Status: #500</p>
            </div>
        </div>`
}));

Alpine.data('skills',() => ({
    tech: [
        {
            image: 'https://img.icons8.com/?size=100&id=r4UrHt1gLC2t&format=png&color=000000',
            delay: 0
        },
        {
            image: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000',
            delay: 100
        },
        {
            image: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000',
            delay: 200
        },
        {
            image: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',
            delay: 300
        },
        {
            image: 'https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000',
            delay: 400
        },
        {
            image: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000',
            delay: 500
        },
        {
            image: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000',
            delay: 600
        },
        {
            image: 'https://img.icons8.com/?size=100&id=XH6rVkDQCZ9U&format=png&color=000000',
            delay: 700
        },
        {
            image: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000',
            delay: 800
        },
        {
            image: 'https://img.icons8.com/?size=100&id=puL87ypQPxxr&format=png&color=000000',
            delay: 900
        },
        {
            image: 'https://icon.icepanel.io/Technology/png-shadow-512/Alpine.js.png',
            delay: 1000
        },
        {
            image: 'https://img.icons8.com/?size=100&id=24895&format=png&color=000000',
            delay: 1100
        },
        {
            image: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
            delay: 1400
        },
        {
            image: 'https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000',
            delay: 1500
        },
        {
            image: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
            delay: 1600
        }
    ],
    skillAssets: [
        {
            image: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
            delay: 300,
        },
        {
            image: 'https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000',
            duration: 400
        },
        {
            image: 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000',
            delay: 500
        },
        {
            image: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000',
            duration: 600
        },
        {
            image: 'https://img.icons8.com/?size=100&id=55251&format=png&color=000000',
            delay: 700
        }
    ],
    renderChart() {
        const ctx = document.getElementById('chart').getContext('2d');
        const data = {
            labels: [
              'Debuging',
              'Syntax',
              'Frameworks',
              'Basic',
              'Most used'
            ],
            datasets: [
                {
                    label: 'JavaScript',
                    data: [75, 80, 65, 90, 95],
                    fill: true,
                    backgroundColor: 'rgba(25, 25, 0, 0.5)',
                    borderColor: 'rgb(255, 255, 0)',
                    pointBackgroundColor: 'rgb(32, 32, 32)',
                    pointBorderColor: '#ffff00',
                    pointHoverBackgroundColor: '#252525',
                    pointHoverBorderColor: 'rgb(255, 255, 0)'
                },
                {
                    label: 'PHP',
                    data: [70, 80, 20, 90, 50],
                    fill: true,
                    backgroundColor: 'rgba(0, 0, 235, 0.5)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#252525',
                    pointHoverBackgroundColor: '#252525',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                },
                {
                    label: 'Dart',
                    data: [65, 75, 70, 80, 70],
                    fill: true,
                    backgroundColor: 'rgba(51, 153, 255, 0.5)',
                    borderColor: 'rgb(51, 51, 255)',
                    pointBackgroundColor: 'rgb(51, 51, 255)',
                    pointBorderColor: '#3333ff',
                    pointHoverBackgroundColor: '#3333ff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                },
                {
                    label: 'Python',
                    data: [40, 70, 50, 50, 20],
                    fill: true,
                    backgroundColor: 'rgba(255, 255, 0, 0.5)',
                    borderColor: 'rgb(153, 51, 255)',
                    pointBackgroundColor: 'rgb(255, 255, 0)',
                    pointBorderColor: '#9933ff',
                    pointHoverBackgroundColor: '#9933ff',
                    pointHoverBorderColor: 'rgb(153, 51, 255)'
                },
                {
                    label: 'C#',
                    data: [28, 50, 10, 50, 10],
                    fill: true,
                    backgroundColor: 'rgba(255, 153, 153, 0.5)',
                    borderColor: 'rgb(255, 100, 100)',
                    pointBackgroundColor: 'rgb(255, 153, 153)',
                    pointBorderColor: '#FF0000',
                    pointHoverBackgroundColor: '#FF0000',
                    pointHoverBorderColor: 'rgb(255, 153, 153)'
                }
            ]
        };

        return new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            color: '#252525'
                        }
                    }
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            },
          });
    },
    init(){
        this.renderChart();
    }
}));

Alpine.start();