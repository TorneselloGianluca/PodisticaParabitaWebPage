import React, { useState, useMemo } from 'react';
import { Search, Trophy } from 'lucide-react';

const AtletiData = [
  { id: 1, nome: "Antonio", cognome: "Alibrando", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/611805053_10234721393033794_2070722287920021778_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XNXKaAFoxIQQ7kNvwEoFb0S&_nc_oc=Adogf2vhOaGGJmUZpQJ6rPqryRliko-6Z4SYEDH-YUWjBzZBSvKLUuRj2DjMlzZI0Tn6gst38OtDaFH9vSw0CQ1L&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=7Mv1iccXMRKL_FEQ4RGRHQ&_nc_ss=7b2a8&oh=00_Af4XXgmHAj_AHsZqLXR9HUoCnjIPO-9quk4FI_cE-rni8w&oe=69FCF2FD" },
  { id: 2, nome: "Massimo", cognome: "Antonaci", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/637716781_1464642152177530_38773871412924981_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lJlHv_bDp4wQ7kNvwGcyKp4&_nc_oc=AdrJ-KiJY5QYl-QmR3HdXSYiTiLg8EfqFzKoDRwM2h4dG0sRPWdKl89r2w3j6hws99NFjgnW8QmpaV3xHAT9I_b8&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=MrFJ105hNoIUEqGWosA5Uw&_nc_ss=7b2a8&oh=00_Af4ezkjxHY2k-AIRedXAeX2iX73hMDHJa6t4Aqp1r3WiBw&oe=69FD1BC2" },
  { id: 3, nome: "Rodolfo", cognome: "Antonucci", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641657497_1464642425510836_3851956466869420864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qd7YYwV-PxMQ7kNvwH_lyI4&_nc_oc=AdojbgdzLfgTEvetgfvdRBcqjg1L08kCeV7zDn7v1LEa1Vf9xcTZEeuofr3yR3j41atcOlzKkCoi1c-AFBroCn1d&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=hBbZQCWGj0GOuF-9H5QK7w&_nc_ss=7b2a8&oh=00_Af65Xyi5rF6DEZ4Dj5Ou5m_r9xwYcO1LVzrTrXKWLTq5-w&oe=69FCF6EF" },
  { id: 4, nome: "Alberto", cognome: "Bianco", genere: "Maschio", foto: "" },
  { id: 5, nome: "Claudio", cognome: "Bray", genere: "Maschio", foto: "" },
  { id: 6, nome: "Flavio", cognome: "Bove", genere: "Maschio", foto: "" },
  { id: 7, nome: "Gianluca", cognome: "Barbaro", genere: "Maschio", foto: "" },
  { id: 8, nome: "Maria Rita", cognome: "Buffo", genere: "Femmina", foto: "" },
  { id: 9, nome: "Oliviero", cognome: "Bove", genere: "Maschio", foto: "" },
  { id: 10, nome: "Rosaria", cognome: "Bleve", genere: "Femmina", foto: "" },
  { id: 11, nome: "Biagio", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 12, nome: "Andrea", cognome: "Contaldo", genere: "Maschio", foto: "" },
  { id: 13, nome: "Biagio", cognome: "Carlino", genere: "Maschio", foto: "" },
  { id: 14, nome: "Daniela", cognome: "Cataldi", genere: "Femmina", foto: "" },
  { id: 15, nome: "Daniele", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/634902330_1458679709440441_2372868784848249304_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c7cK2YV5xL8Q7kNvwEVTyX8&_nc_oc=AdryhnBuR28hJPp7e-9yf-MRkQ3C0ueoGAXkDKYejvgMnDOPoze9_c4aYs08wq_tSKhiDzyZKZXL29VJm0M4JjiI&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=SJNfP6ZFxymshvrJsCz3ww&_nc_ss=7b2a8&oh=00_Af5c9LxMWnXfoDco-sO4V1TISJtk94rpLQUK6RjjguH5kA&oe=69FCFD24" },
  { id: 16, nome: "Elena", cognome: "Coppola", genere: "Femmina", foto: "" },
  { id: 17, nome: "Emanuele", cognome: "Cataldi", genere: "Maschio", foto: "" },
  { id: 18, nome: "Fabio", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 19, nome: "Giovanni", cognome: "Cazzato", genere: "Maschio", foto: "" },
  { id: 20, nome: "Luciana", cognome: "Camisa", genere: "Femmina", foto: "" },
  { id: 21, nome: "Luigi", cognome: "Camisa", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641421166_1464641708844241_2555353858570173754_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mXLrxP2W0QUQ7kNvwH_StIL&_nc_oc=Adq2PmRyAPeRrvbnvRXlRs4eH7PSiia-3HgRO48SQYALz9pLCXPiQJMzCI7safD3l-CYK7WtruusnsuXk63GR2SQ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=qVkAEOcp7iLvvIFR9JDvBQ&_nc_ss=7b2a8&oh=00_Af5S9o7y_OJp8jYujWzDbizt8II_tFLaSV1sEalFGcTK9A&oe=69FCF3A2" },
  { id: 22, nome: "Luigia", cognome: "Cataldo", genere: "Femmina", foto: "" },
  { id: 23, nome: "Marco", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/671825950_1506095768032168_7814484832160870276_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XwwPb_5BbvkQ7kNvwEf0A-x&_nc_oc=AdpKyj041JqjK8MjFkYAjo0WHRt5DgaLqXkuIjQGD7TWIxX866KALtWdG4Ijf7JizoRzLYV1yYAaJQ9x6TSoSFbH&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=zeTH3vpN2i6ImQRYpPIrMA&_nc_ss=7b2a8&oh=00_Af5hShpqWxhvfDHbX3eQ5QBVEuKtZ61MS0_bm109EtTO1w&oe=69FCFB2B" },
  { id: 24, nome: "Maria Claudia", cognome: "Costa", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/656887066_1488686286439783_6787412284667430383_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IHC_h8BJrNkQ7kNvwGlAMhs&_nc_oc=AdqOfBDC8ZvcRW2jW2kmNNersXS_ZrJxCzlxzpar7xy1Wos72FWmfwCzUSN6RHo0Igmbvw6H0bDtftvIf0KvBFSO&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=-S5jWywlR0PutDuvW166tg&_nc_ss=7b2a8&oh=00_Af4_ap3_W2_ZanPM_ryN-n9z3oqIrH_TQ3UgSmSfZjEXWw&oe=69FCF9E6" },
  { id: 25, nome: "Mario", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 26, nome: "Massimo", cognome: "Cataldi", genere: "Maschio", foto: "" },
  { id: 27, nome: "Pina", cognome: "Camisa", genere: "Femmina", foto: "" },
  { id: 28, nome: "Rosanna", cognome: "Cataldi", genere: "Femmina", foto: "" },
  { id: 29, nome: "Stefano", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 30, nome: "Vincenzo", cognome: "Cataldi", genere: "Maschio", foto: "" },
  { id: 31, nome: "Vincenzo", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 32, nome: "Carmelo", cognome: "De Matteis", genere: "Maschio", foto: "" },
  { id: 33, nome: "Pasquale", cognome: "De Donno", genere: "Maschio", foto: "" },
  { id: 34, nome: "Patrizia", cognome: "D’Aprile", genere: "Femmina", foto: "" },
  { id: 35, nome: "Antonio", cognome: "Fiorentino", genere: "Maschio", foto: "" },
  { id: 36, nome: "Luigi", cognome: "Finalizzi", genere: "Maschio", foto: "" },
  { id: 37, nome: "Mauro", cognome: "Federico", genere: "Maschio", foto: "" },
  { id: 38, nome: "Riccardo", cognome: "Fiorenza", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/611294233_1424252019549877_4384969365269934224_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IqmyKTHcG1EQ7kNvwG5Waym&_nc_oc=AdpA37fulF6YmtCWpzBYTfZd7K3H1FshBM4ofzN04gmZmwC2Pfh4vRF64gCBjr8AFOByUjWGeSZOsUGYAMQsiveQ&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=mnWnqZmPINo-fu0Su9qR-g&_nc_ss=7b2a8&oh=00_Af6rD5XrAuc-vcLmK5WRdBJcTQK0KZJ37MCsakinK2Ze_w&oe=69FD08FC" },
  { id: 39, nome: "Antonietta", cognome: "Gatto", genere: "Femmina", foto: "" },
  { id: 40, nome: "Gianni", cognome: "Garzia", genere: "Maschio", foto: "" },
  { id: 41, nome: "Giulio", cognome: "Giaffreda", genere: "Maschio", foto: "" },
  { id: 42, nome: "Raffaele", cognome: "Gatto", genere: "Maschio", foto: "" },
  { id: 43, nome: "Giovanna", cognome: "Rizzello", genere: "Femmina", foto: "" },
  { id: 44, nome: "Rocco", cognome: "Giaffreda", genere: "Maschio", foto: "" },
  { id: 45, nome: "Stefano", cognome: "Greco", genere: "Maschio", foto: "" },
  { id: 46, nome: "Scoot", cognome: "Howe", genere: "Maschio", foto: "" },
  { id: 47, nome: "Antonio", cognome: "Leopizzi", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/638991513_1464641635510915_7470173054023746635_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=gh_eKmY6Q_EQ7kNvwEAUjEZ&_nc_oc=AdrELsoaOAdza9olnr4eCcc3jX9PDZFduept6XFn2D48C2UPPDoxpoxGqpS_6edxjTSHaqWSBPYPR2eIOLLdGCYs&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=0Q4pHdc1Qxmm16HHiGPhDg&_nc_ss=7b2a8&oh=00_Af7fNt3-9cwoRTzSHlUy7Rc0FcKIZ4ZS2rlE3hRdazJxHg&oe=69FCF027" },
  { id: 48, nome: "Enzo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 49, nome: "Lorenzo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 50, nome: "Mimmo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 51, nome: "Alessandro", cognome: "Mariano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/644139444_1471937938114618_3950623922575043868_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ibt_OcmvqzAQ7kNvwG6XS9A&_nc_oc=AdrZ_fwZgUHhZ2f6F4r8ic4RqxP-TehJqSslwqGYfag01cS2sRpSSVaUlwujCZlT81WKuGdpAueSVArfEayaC5zG&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=I11qNvBHhfpBfebkbp4Ycw&_nc_ss=7b2a8&oh=00_Af62nTed-QbC-R0YsRveGbJRsQk8JcC6zSW0rzNjAMIetA&oe=69FD0F3D" },
  { id: 52, nome: "Andrea", cognome: "Marsano", genere: "Maschio", foto: "" },
  { id: 53, nome: "Annamaria", cognome: "Mirizio", genere: "Femmina", foto: "" },
  { id: 54, nome: "Antonio", cognome: "Margarito", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/608517441_1424251846216561_5496830407896535255_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kKQTZtLik5oQ7kNvwGF2LRT&_nc_oc=AdpIKNz6On-yXcTJwa519KpEcMwfJ3KF4fEvIhAwsIGdOR0TMTh-oTqf3ymqOTPWk6RplhKajVtc8ClPJFhhIrwU&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=o2KudQG_13qYKFcNkOaPug&_nc_ss=7b2a8&oh=00_Af6lwHziaQUy5TDH2slT28WycBXY6i9f43DVbqJ0wabDLA&oe=69FCF674" },
  { id: 55, nome: "Carlo", cognome: "Milelli", genere: "Maschio", foto: "" },
  { id: 56, nome: "Giuseppe", cognome: "Marzano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/592145539_1397681715540241_1973039946598016200_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1s2MpY8S99YQ7kNvwGsDfpE&_nc_oc=AdoUXZZOMOhKfgyHVvFrLi4jCsYf9TWu9Em37Qfycg3GIMkMoqBUeiltBipNqg5WQc97sDKY9TdC02PwRZrFAYAH&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=8JeSB845V3RGYnHGdGdlbw&_nc_ss=7b2a8&oh=00_Af75MvyBtl-Fy82zZTzXtJ2BGxH5ooelxVL0Xv0Xe5Vu8w&oe=69FCEC18" },
  { id: 57, nome: "Marcello", cognome: "Margari", genere: "Maschio", foto: "" },
  { id: 58, nome: "Matteo", cognome: "Mazzotta", genere: "Maschio", foto: "" },
  { id: 59, nome: "Maurizio", cognome: "Marrella", genere: "Maschio", foto: "" },
  { id: 60, nome: "Michele", cognome: "Maggio", genere: "Maschio", foto: "" },
  { id: 61, nome: "Michele", cognome: "Marra", genere: "Maschio", foto: "" },
  { id: 62, nome: "Mimino", cognome: "Martignano", genere: "Maschio", foto: "" },
  { id: 63, nome: "Tiziano", cognome: "Moscatello", genere: "Maschio", foto: "" },
  { id: 64, nome: "Luigi", cognome: "Nicoletti", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/678766703_1516902603618151_3508963526300434816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9N6lu8vPKJUQ7kNvwEYsBzm&_nc_oc=AdqA0f8gEIb7GQ8Y54bpKBZlWV6_-K4mVMWVjDV0I4aSe3-c1DHrZM3iBGzNgTvnuIwcCPP11APdaZuBk726-AmD&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=mFW8jg7x7C8ERbP-cUWVyA&_nc_ss=7b2a8&oh=00_Af7EzxhxFz4k7ZU6z32yh1qiUXrIPMGhnSENVSkeWfUH3A&oe=69FD0413" },
  { id: 65, nome: "Antonio", cognome: "Notaro", genere: "Maschio", foto: "" },
  { id: 66, nome: "Pasquale", cognome: "Napoleone", genere: "Maschio", foto: "" },
  { id: 67, nome: "Tommaso", cognome: "Nicoletti", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/611308477_1424252236216522_394716145350987565_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=D2K6jGoH5doQ7kNvwEWeStU&_nc_oc=AdrbVdIsVPAxtjkXHUFcnCBg7MtPvpDJ53KiBV-nseTkrXNTxpaZEmP8eDVED0UBGuvFJ51Bu-753GGhCr4nTfrU&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=NcUOrnCxkf3K5eTiBJGOlQ&_nc_ss=7b2a8&oh=00_Af46MSJuh5ZtSnhhOWFPo_-ROYrGUV9pFhxU_GhGTyrwyw&oe=69FD0F72" },
  { id: 68, nome: "Giuseppe", cognome: "Provenzano", genere: "Maschio", foto: "" },
  { id: 69, nome: "Antonella", cognome: "Pellico", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/597848601_1405535334754879_6844864431005667700_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xUOmZnLvhDoQ7kNvwHayagi&_nc_oc=AdoJcrZZvvPdNLyNI7PcIaoTKqGtOrC0WTKyuz0yQfDTJyIbnlaFnhrBF7OG57C5mvX_yvGuC_fmc4NiZ6aaGkVQ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=rlvCfk1NQyav2gXBwz7PeA&_nc_ss=7b2a8&oh=00_Af5HtmCHlFZ4hWCEF5Bhs5EnsbU7Npfyqk36gzdM_yuYkg&oe=69FD1830" },
  { id: 70, nome: "Biagio", cognome: "Potenza", genere: "Maschio", foto: "" },
  { id: 71, nome: "Cristina", cognome: "Primiceri", genere: "Femmina", foto: "" },
  { id: 72, nome: "Fabiola", cognome: "Parlati", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/608765748_1423548602953552_7451703545746003189_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ypZHgqYQRtoQ7kNvwE7bFXx&_nc_oc=AdpTMkWsdGmGlhvn2bmmvEvzpbI_Zf95ewN4Vln0kmVwkY90xrftetUxkqPM2Xde0XKpqNGjUBzCRm9h5MMoIzeq&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=xs_Fs3SNE9gb0Dzd919NnA&_nc_ss=7b2a8&oh=00_Af7ElymzbT4HWcEPMbho8k8EuOej6krTK4tTTJW7eqYvYQ&oe=69FCECC4" },
  { id: 73, nome: "Giovanni", cognome: "Patera", genere: "Maschio", foto: "" },
  { id: 74, nome: "Letizia", cognome: "Leopizzi", genere: "Femmina", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/637779658_1464641702177575_9205981894369298051_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SbmBw0PeEJwQ7kNvwE9UeC6&_nc_oc=AdrVjxBXZNeDySglctInRHvxar6tU3mPskoLKYBtfZS_P1lfPmw1BegF0rDt_d0qOlGuP8nDcyQkTOeiT_z08WjL&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=YtAMddWZCSD1c-GCNH7hPQ&_nc_ss=7b2a8&oh=00_Af6ZbqpeNJHKRKBUQerXgNtPzUiJOZ52pfPpWXaRVkQtnw&oe=69FD13D2" },
  { id: 75, nome: "Luigi", cognome: "Pasanisi", genere: "Maschio", foto: "" },
  { id: 76, nome: "Marianna", cognome: "Pasanisi", genere: "Femmina", foto: "" },
  { id: 77, nome: "Paola", cognome: "Zingarelli", genere: "Femmina", foto: "" },
  { id: 78, nome: "Piera", cognome: "Pastore", genere: "Femmina", foto: "" },
  { id: 79, nome: "Rosy", cognome: "Piccinno", genere: "Femmina", foto: "" },
  { id: 80, nome: "Stefano", cognome: "Provenzano", genere: "Maschio", foto: "" },
  { id: 81, nome: "Fernando", cognome: "Quarta", genere: "Maschio", foto: "" },
  { id: 82, nome: "Riccardo", cognome: "Tornesello", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/590791527_1397681115540301_3531264912356292952_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kn5qCKilGSYQ7kNvwGuszDw&_nc_oc=AdqAZ7U-jSAJrU20rYcVFzviZIEDNQHQp078TJ5I4ahPuk3h81VJPN0iytXZU5rdez-nuEkdECvS_exqQbrndADN&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=FJwbO7aXTcdJ89Zs3LgrFA&_nc_ss=7b2a8&oh=00_Af7XoiA-R16q1iBbpo-9KJwJyfFNQCaXNTGvuCuHJdAj5w&oe=69FD1351" },
  { id: 83, nome: "Antonio", cognome: "Ria", genere: "Maschio", foto: "" },
  { id: 84, nome: "Antonio", cognome: "Romano", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/648092356_1476386877669724_4553832059206464608_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=69_XrtWmB7UQ7kNvwEMD-jU&_nc_oc=AdqCugNlcpnDnOCSyQtpDaEWPWRXhcoPQdivFXf3SaFrom-d8IZJreRpSxwxrPpd3mGZ1y-ELx2F6o2-Sciyn4p2&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=aFM8sCUTjCpFXqLojTLJDw&_nc_ss=7b2a8&oh=00_Af4MdoAahwL_u05qX773hV14Rk2iSIDviCv3oo0cJne82g&oe=69FCEA62" },
  { id: 85, nome: "Carmelo", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 86, nome: "Francesco", cognome: "Romano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/611734340_1424251609549918_6548305235494541383_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Nk-BqTBUwHsQ7kNvwH06UvQ&_nc_oc=AdortMlFqq0YCcpDfBxn2SsRjCJx6OcUpYxIv-HX9MyaCo5xwhHuheQG3lop1gFzIIEEx7O9UpcIjVle4rpvQUob&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=nTY27nso5436PJ8k3QfZyA&_nc_ss=7b2a8&oh=00_Af5De05gCBa2I_CVVEcxowDrYjgLiMNG4q367invndYqUg&oe=69FD11E6" },
  { id: 87, nome: "Giuseppe", cognome: "Ruberto", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641440841_1464642218844190_7180376024560716926_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=t_4LZSN-z6AQ7kNvwFbkX7E&_nc_oc=AdrBhsT5-MagmE_9EKN84Gqy7D2TxWKqbMRQPojISQXLexf5kgovgbJ5T1K5-0D--68qAMyxFInCsSIsugeB9gUy&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=EHfJejHvXRXFeUJnCcTjKg&_nc_ss=7b2a8&oh=00_Af4DIRaSrCa0a858X3iadPjGNZCRaVyWpA6tXbKxhtYFaA&oe=69FCF83E" },
  { id: 88, nome: "Giusy", cognome: "Romano Maggio", genere: "Femmina", foto: "" },
  { id: 89, nome: "Laura", cognome: "Rimo", genere: "Femmina", foto: "" },
  { id: 90, nome: "Mimma", cognome: "Ria", genere: "Femmina", foto: "" },
  { id: 91, nome: "Tommaso", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 92, nome: "Antonio", cognome: "Schiattino", genere: "Maschio", foto: "" },
  { id: 93, nome: "Carmelo", cognome: "Schirinzi", genere: "Maschio", foto: "" },
  { id: 94, nome: "Filippo", cognome: "Schiattino", genere: "Maschio", foto: "" },
  { id: 95, nome: "Francesca", cognome: "Sergi", genere: "Femmina", foto: "" },
  { id: 96, nome: "Luigi", cognome: "Sansone", genere: "Maschio", foto: "" },
  { id: 97, nome: "Luigi", cognome: "Solidoro", genere: "Maschio", foto: "" },
  { id: 98, nome: "Maria Cristina", cognome: "Silvano", genere: "Femmina", foto: "" },
  { id: 99, nome: "Paola", cognome: "De Santis", genere: "Femmina", foto: "" },
  { id: 100, nome: "Raffaele", cognome: "Seclì", genere: "Maschio", foto: "" },
  { id: 101, nome: "Rossano", cognome: "Specchiarello", genere: "Maschio", foto: "" },
  { id: 102, nome: "Stefano", cognome: "Seclì", genere: "Maschio", foto: "" },
  { id: 103, nome: "Tiziano", cognome: "Schirinzi", genere: "Maschio", foto: "" },
  { id: 104, nome: "Tommaso", cognome: "Sabato", genere: "Maschio", foto: "" },
  { id: 105, nome: "Pierluigi", cognome: "Toma", genere: "Maschio", foto: "" },
  { id: 106, nome: "Biagio", cognome: "Tedesco", genere: "Maschio", foto: "" },
  { id: 107, nome: "Biagio", cognome: "Tornesello", genere: "Maschio", foto: "" },
  { id: 108, nome: "Claudia", cognome: "Tempesta", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/648679571_1476392987669113_5852076322184431004_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Obv5UoxzSAwQ7kNvwF1eNAE&_nc_oc=AdqNY0Zd5Wk6Q79EYTzLFgHZokVsqGVpMNw0zZgJggD20LOcpX7lkGO50v-clsv2ESKTpLR43ONW1tTR2EYz38Ai&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=urgvh5QNUp4SdtOopXnBQA&_nc_ss=7b2a8&oh=00_Af6ElZJb30SsA07IVKZ7p2eFaxzzAGUriod8RdrrWxU7-g&oe=69FD0B60" },
  { id: 109, nome: "Giovanni", cognome: "Tornesello", genere: "Maschio", foto: "" },
  { id: 110, nome: "Piero", cognome: "Tempesta", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/640261739_1464641895510889_4800416207100067314_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TnGAghbt_lYQ7kNvwHIGYj4&_nc_oc=AdrUGyidriXHN_fByX_6NKFnBWwzq5vUGPXka-BgjZChfXhgC3gPdADpN0t5fw6AmESV-NalwC__3wy-_oPO5RaZ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=jGLxDwggamH1cudNzy9HFw&_nc_ss=7b2a8&oh=00_Af5XxmiEhKtShylVgdEC94-Y7OuGwa6vyRWSzgEyd1XV8Q&oe=69FD17C5" },
  { id: 111, nome: "Antonio", cognome: "Vitartali", genere: "Maschio", foto: "" },
  { id: 112, nome: "Marina", cognome: "Verardi", genere: "Femmina", foto: "" },
  { id: 113, nome: "Rosanna", cognome: "Venuti", genere: "Femmina", foto: "" },
  { id: 114, nome: "Carmine", cognome: "Negro", genere: "Maschio", foto: "" },
  { id: 115, nome: "Mimino", cognome: "Barone", genere: "Maschio", foto: "" }
];

const Album = () => {
  const [search, setSearch] = useState("");
  const [filtroGenere, setFiltroGenere] = useState("Tutti");

  const atletiFiltrati = useMemo(() => {
    return AtletiData.filter(atleta => {
      const fullNome = `${atleta.nome} ${atleta.cognome}`.toLowerCase();
      const matchNome = fullNome.includes(search.toLowerCase());
      const matchGenere = filtroGenere === "Tutti" || atleta.genere === filtroGenere;
      return matchNome && matchGenere;
    });
  }, [search, filtroGenere]);

  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-x-hidden font-sans">
      
      {/* === SFONDO DINAMICO === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 60 M0 60 L30 30 M30 0 L60 30 M0 30 L30 0' stroke='%23ffffff' stroke-width='1' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 pt-12 pb-20">
        
        {/* === HEADER === */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-20 transform -rotate-3"></div>
            <h1 className="relative text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic">
              ALBUM <span className="text-yellow-400 italic">FIGURINE</span>
            </h1>
            <div className="mt-2 bg-white text-blue-900 px-4 py-1 inline-block skew-x-[-12deg] font-black uppercase text-sm md:text-xl shadow-lg">
              Podistica di Parabita
            </div>
          </div>
        </div>

        {/* === FILTRI === */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-400 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Cerca il tuo campione..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl text-white font-bold focus:border-yellow-400 transition-all outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select 
              className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs border-2 border-white/10 outline-none hover:border-blue-500 cursor-pointer transition-all"
              onChange={(e) => setFiltroGenere(e.target.value)}
            >
              <option value="Tutti">Tutti</option>
              <option value="Maschio">Uomini</option>
              <option value="Femmina">Donne</option>
            </select>
          </div>
        </div>

        {/* === GRIGLIA FIGURINE === */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
            
            {atletiFiltrati.map((atleta) => (
              <div key={atleta.id} className="relative group perspective-1000">
                
                <div className="absolute inset-0 bg-black/40 rounded-2xl border-2 border-white/5 -m-2"></div>
                
                <div className="relative bg-white p-2 rounded-xl shadow-2xl transition-all duration-500 group-hover:rotate-[-3deg] group-hover:-translate-y-3 cursor-pointer">
                  
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-900 border-[3px] border-slate-100">
                    {atleta.foto ? (
                      <img 
                        src={atleta.foto} 
                        alt={`${atleta.nome} ${atleta.cognome}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500 italic text-xs p-4 text-center">
                        Foto non disponibile
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-mono">
                      #{String(atleta.id).padStart(3, '0')}
                    </div>
                  </div>

                  <div className="mt-4 px-1 pb-2">
                    <h3 className="mt-1 text-sm md:text-base font-black text-slate-900 uppercase leading-none truncate">
                      {atleta.nome} <span className="text-blue-500">{atleta.cognome}</span>
                    </h3>
                  </div>

                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-[-100%] w-full h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="absolute -z-10 inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}

          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-24 max-w-xs mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-6 rounded-3xl border border-white/10 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
               <Trophy size={40} className="text-white" />
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Status Raccolta</p>
            <h4 className="text-white font-black text-2xl tracking-tighter">
              {atletiFiltrati.length} <span className="text-yellow-400">/ {AtletiData.length}</span>
            </h4>
            <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-blue-500 transition-all duration-1000" 
                 style={{ width: `${(atletiFiltrati.length / AtletiData.length) * 100}%` }}
               ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;