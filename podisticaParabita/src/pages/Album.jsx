import React, { useState, useMemo } from 'react';
import { Search, Trophy } from 'lucide-react';

import Pierluigi from '../assets/PierluigiToma.png';
import Schiattino from '../assets/schiattino.jpeg';
import Lorenzo from '../assets/fototo.jpeg';

const AtletiData = [
  { id: 1, nome: "Antonio", cognome: "Alibrando", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/611805053_10234721393033794_2070722287920021778_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XNXKaAFoxIQQ7kNvwEoFb0S&_nc_oc=Adogf2vhOaGGJmUZpQJ6rPqryRliko-6Z4SYEDH-YUWjBzZBSvKLUuRj2DjMlzZI0Tn6gst38OtDaFH9vSw0CQ1L&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=7Mv1iccXMRKL_FEQ4RGRHQ&_nc_ss=7b2a8&oh=00_Af4XXgmHAj_AHsZqLXR9HUoCnjIPO-9quk4FI_cE-rni8w&oe=69FCF2FD" },
  { id: 2, nome: "Massimo", cognome: "Antonaci", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/637716781_1464642152177530_38773871412924981_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lJlHv_bDp4wQ7kNvwGcyKp4&_nc_oc=AdrJ-KiJY5QYl-QmR3HdXSYiTiLg8EfqFzKoDRwM2h4dG0sRPWdKl89r2w3j6hws99NFjgnW8QmpaV3xHAT9I_b8&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=MrFJ105hNoIUEqGWosA5Uw&_nc_ss=7b2a8&oh=00_Af4ezkjxHY2k-AIRedXAeX2iX73hMDHJa6t4Aqp1r3WiBw&oe=69FD1BC2" },
  { id: 3, nome: "Rodolfo", cognome: "Antonucci", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641657497_1464642425510836_3851956466869420864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qd7YYwV-PxMQ7kNvwH_lyI4&_nc_oc=AdojbgdzLfgTEvetgfvdRBcqjg1L08kCeV7zDn7v1LEa1Vf9xcTZEeuofr3yR3j41atcOlzKkCoi1c-AFBroCn1d&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=hBbZQCWGj0GOuF-9H5QK7w&_nc_ss=7b2a8&oh=00_Af65Xyi5rF6DEZ4Dj5Ou5m_r9xwYcO1LVzrTrXKWLTq5-w&oe=69FCF6EF" },
  { id: 4, nome: "Alberto", cognome: "Bianco", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-1/438161747_10229932760934563_685791664736019690_n.jpg?stp=c0.0.261.261a_dst-jpg_s261x261_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=PZq3cY_c4hoQ7kNvwFhf_1Z&_nc_oc=Adp_Dza6V6z8ksTYEdeGpVPdId7uDUEJxUvTQNeLn8D77rBFM6BdJeQgl9CnvdHb-MNqgQMgWqMQUui4z0ZjPDg9&_nc_zt=24&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=4UUzu-0NCSaqgJHnI-5tbA&_nc_ss=7b2a8&oh=00_Af6KDa5-FqVP32PWs7bjG2Y-Qt7OC9O3_06KcKomv-KowQ&oe=69FD0D5F" },
  { id: 5, nome: "Claudio", cognome: "Bray", genere: "Maschio", foto: "" },
  { id: 7, nome: "Gianluca", cognome: "Barbaro", genere: "Maschio", foto: "" },
  { id: 8, nome: "Maria Rita", cognome: "Buffo", genere: "Femmina", foto: "" },
  { id: 9, nome: "Oliviero", cognome: "Bove", genere: "Maschio", foto: "" },
  { id: 10, nome: "Rosaria", cognome: "Bleve", genere: "Femmina", foto: "" },
  { id: 11, nome: "Biagio", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent.ffco3-1.fna.fbcdn.net/v/t39.30808-6/488887257_1197065878935160_3312170353841865553_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4yZGlXh7M2UQ7kNvwHb83A-&_nc_oc=Adpsa8icFNnIafBjisMuglfJaleSo3ZYA1pwB5ITfdzZaKfWtSNKuNuvByxHVkB_cIZfqh4FtivqXoElywKY6kyM&_nc_zt=23&_nc_ht=scontent.ffco3-1.fna&_nc_gid=4C1fQ89jrJqC9JGGwSdTxw&_nc_ss=7b2a8&oh=00_Af4vyoSbi6WrhD6awKOCQxrARNJdxJyXS8t0aiBZVb7sDQ&oe=69FD97E5" },
  { id: 12, nome: "Andrea", cognome: "Contaldo", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/494566890_1238932844748463_5549437831342326514_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zX7qpCWylawQ7kNvwEIGlkN&_nc_oc=AdqdRxNfcKX8xnxaMm_epQsqN55gp4yiZVIsFEATeTP2THetlnkGn8pkUdrM7M9Y8s_6WGAX_rapfGDIkEJIqgEI&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=r8p8Rc4tFBrfQm7-t6YMzw&_nc_ss=7b2a8&oh=00_Af7JcKJ0tYjXIaiaxvPiwuUQSwlPk9TggF4NIkcO_VSBuA&oe=69FD1649" },
  { id: 13, nome: "Biagio", cognome: "Carlino", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489710230_1201537065154708_8038261427236726819_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=J6ceOl49fpwQ7kNvwFDt1ff&_nc_oc=Ado2aRJKcT4z19G0Jr8eOKrRYhEzzenfPZ4e4a-sWO5Q7OpBEq3rVOAGQn_5PpYFQuGua9HZWWE28SA3Y7oYVsPm&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=N59RR3_bifxOrC2gMoBYbQ&_nc_ss=7b2a8&oh=00_Af7LAZN7vrvLr3K3FZIEZV6UKFgdXO3f0JQfitdm5X9-dw&oe=69FD26A4" },
  { id: 14, nome: "Daniela", cognome: "Cataldi", genere: "Femmina", foto: "" },
  { id: 15, nome: "Daniele", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/634902330_1458679709440441_2372868784848249304_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c7cK2YV5xL8Q7kNvwEVTyX8&_nc_oc=AdryhnBuR28hJPp7e-9yf-MRkQ3C0ueoGAXkDKYejvgMnDOPoze9_c4aYs08wq_tSKhiDzyZKZXL29VJm0M4JjiI&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=SJNfP6ZFxymshvrJsCz3ww&_nc_ss=7b2a8&oh=00_Af5c9LxMWnXfoDco-sO4V1TISJtk94rpLQUK6RjjguH5kA&oe=69FCFD24" },
  { id: 16, nome: "Elena", cognome: "Coppola", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/527409808_1295095409132206_9159780264493600262_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tyQH_0tDRRgQ7kNvwFWJhFN&_nc_oc=AdprTfqd5b0IVVckgl7HcuayBBkEE4uyiCKB-gmIvfSrIIVPA2tBm7-5qMiqS52y5JXBvBLKw3DxN0iHb1qPVd0T&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=y-z7UAXVsuFXy97OoF1J8g&_nc_ss=7b2a8&oh=00_Af4MCQYZp5qq1hNABbou8ub4Fow6DbckYdvnyPnw4p3dZA&oe=69FD2DCE" },
  { id: 17, nome: "Emanuele", cognome: "Cataldi", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/490181217_1203583574950057_7040047349388108148_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RRPVNOhQogIQ7kNvwERttav&_nc_oc=AdpwxP8Wz6-Zb_aiMkAjkXnyVe3Wr0YHbqYoPsWGkNpODqlKLmNnSeReXYzyGlL5Ks0wCtO07N4U1E9WKt9cCSSO&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=Et3WlvJ2IVGhVFXqe2qbZA&_nc_ss=7b2a8&oh=00_Af70cPJs1UN5tefGhe4xVI64gy39SSSMhrRAAUi-c3yVNw&oe=69FD1AA9" },
  { id: 18, nome: "Fabio", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 19, nome: "Giovanni", cognome: "Cazzato", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/488816439_1197867165521698_2656886976032512778_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dVAtG1aGJq4Q7kNvwF7wzIX&_nc_oc=Adq-S03_PEWU5WznQN9lO46RL9dMnxPwmPvwBr8-026IbwhbmP2zB0T7pPY32qIV_Yb_q2nYN7LnoQm2P_d7vqUa&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=29mq_PAA51TkTeli1vXSpQ&_nc_ss=7b2a8&oh=00_Af5m4FFzeWd2Q1kol_eE9qwQQfUVMnVs6F8CsZ5cHmochw&oe=69FD193F" },
  { id: 20, nome: "Luciana", cognome: "Camisa", genere: "Femmina", foto: "" },
  { id: 21, nome: "Luigi", cognome: "Camisa", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641421166_1464641708844241_2555353858570173754_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mXLrxP2W0QUQ7kNvwH_StIL&_nc_oc=Adq2PmRyAPeRrvbnvRXlRs4eH7PSiia-3HgRO48SQYALz9pLCXPiQJMzCI7safD3l-CYK7WtruusnsuXk63GR2SQ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=qVkAEOcp7iLvvIFR9JDvBQ&_nc_ss=7b2a8&oh=00_Af5S9o7y_OJp8jYujWzDbizt8II_tFLaSV1sEalFGcTK9A&oe=69FCF3A2" },
  { id: 22, nome: "Luigia", cognome: "Cataldo", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/492943909_1214128597228888_7532091632825250827_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MSkasPwzmrQQ7kNvwHU-RE1&_nc_oc=AdplsfqPxXOeCXoODPV5K6EVYR57l-cDfHsd2M3RGlXFe4rGoXiQ6ikNKFQ5oXH0OgQtGMMTrGBzbJnLDV9SIGQs&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=jhgcp3v9JlaiSijr4AXPMA&_nc_ss=7b2a8&oh=00_Af7PLysMk2ki3UTbefBAvqBwcrzemugW_3I4DV3eJgYtnw&oe=69FD1EC1" },
  { id: 23, nome: "Marco", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/671825950_1506095768032168_7814484832160870276_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XwwPb_5BbvkQ7kNvwEf0A-x&_nc_oc=AdpKyj041JqjK8MjFkYAjo0WHRt5DgaLqXkuIjQGD7TWIxX866KALtWdG4Ijf7JizoRzLYV1yYAaJQ9x6TSoSFbH&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=zeTH3vpN2i6ImQRYpPIrMA&_nc_ss=7b2a8&oh=00_Af5hShpqWxhvfDHbX3eQ5QBVEuKtZ61MS0_bm109EtTO1w&oe=69FCFB2B" },
  { id: 24, nome: "Maria Claudia", cognome: "Costa", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/656887066_1488686286439783_6787412284667430383_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IHC_h8BJrNkQ7kNvwGlAMhs&_nc_oc=AdqOfBDC8ZvcRW2jW2kmNNersXS_ZrJxCzlxzpar7xy1Wos72FWmfwCzUSN6RHo0Igmbvw6H0bDtftvIf0KvBFSO&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=-S5jWywlR0PutDuvW166tg&_nc_ss=7b2a8&oh=00_Af4_ap3_W2_ZanPM_ryN-n9z3oqIrH_TQ3UgSmSfZjEXWw&oe=69FCF9E6" },
  { id: 25, nome: "Mario", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 26, nome: "Massimo", cognome: "Cataldi", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/619179383_1434562608518818_6883462948835967790_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IV3J4hjiqbsQ7kNvwHIqNeO&_nc_oc=AdqpJGEk70sVxHDyhv0NLEotv8bIhUxLwXqpb2MLalBLshPQXtbYM9Dl-nfUYBHSVLSySN1n831PJ9d19DLuWzQh&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=MCi_VXvFLWGof2ckGQsKxA&_nc_ss=7b2a8&oh=00_Af6PEQ3vIO4S6Vs2Gv7UM2KmDvyca35wanLuTod8yI-MKw&oe=69FD09A0" },
  { id: 27, nome: "Pina", cognome: "Camisa", genere: "Femmina", foto: "" },
  { id: 28, nome: "Rosanna", cognome: "Cataldo", genere: "Femmina", foto: "https://scontent.ffco3-1.fna.fbcdn.net/v/t39.30808-6/482345488_1175585471083201_3450599761991098307_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=U0oeH9XkV-MQ7kNvwFuF-vg&_nc_oc=AdofCL52B5J-J5wNvM5LoaNBcwxjosy6F1uOpVYeXUq9rAaVitC_zd6VaFxYv_yNuKiQeYz7Lxb_mnoh-UIpBaV8&_nc_zt=23&_nc_ht=scontent.ffco3-1.fna&_nc_gid=S0xxci9Agk4cT2p6eq8gIQ&_nc_ss=7b2a8&oh=00_Af6tSLkGjtlT0SGQAoLWy0dfu8kDA0_dYuxL_cQVAaf2FQ&oe=69FD6A88" },
  { id: 29, nome: "Stefano", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/486639367_1187423873232694_840667290820176804_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rEpphJ1eDhUQ7kNvwGdtVQg&_nc_oc=AdpcMagGLW6cFgxKwdyA2Z2rZ4Db45mV9lgWCSTWVXwfevW8JQCTrJ7hKLuD1jf5eru5r6A3JfvFZOYBOMb3E-db&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=ByLy5tGYSn4s5BpJZqUP8A&_nc_ss=7b2a8&oh=00_Af4L4l1WwijZO8yptvEtjvGqlMLZMwTdyMf-r9M1fsrftg&oe=69FD8B97" },
  { id: 30, nome: "Vincenzo", cognome: "Cataldi", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/488756158_1197867135521701_6937769354613191307_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6O5JERJ2_fMQ7kNvwGNjpsa&_nc_oc=AdoAYeIBDS4U4lqJ3qfIsvDFEpx3Uw1pVvK8n4iN3k5DD7wLbB3SuWMJ_PsziUZbZpS56RtybXxrwiTdEsWTWSOu&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=-AHjHqTiIXjx-Ls3dScjvg&_nc_ss=7b2a8&oh=00_Af4Mx8yd5FVwkfDN6Anz-O2vH-GjnGCbP9ef9VaBcPe4OQ&oe=69FD2BB3" },
  { id: 31, nome: "Vincenzo", cognome: "Cataldo", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/577446311_10233563848970939_7762394251474428170_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=TOn9AyFjWKIQ7kNvwHbhPXV&_nc_oc=AdoXrVLKHnBCeaYfvK9PUri2MBMMyGwUN2bdgm0taesDcKAJXVOXZ0uZW9C8zSmeaHBBGjjIjz3pbWJRv5LYieZF&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=Bp6Txna3pP60a5qdULLSLA&_nc_ss=7b2a8&oh=00_Af5FaHgMBZT3b1RYSWCPBrSkDcO4ZZI8v_UvBtRMK6N7vg&oe=69FD073B" },
  { id: 32, nome: "Carmelo", cognome: "De Matteis", genere: "Maschio", foto: "" },
  { id: 33, nome: "Pasquale", cognome: "De Donno", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/616137146_1434563968518682_7445527593137915784_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_oznB7JVsIsQ7kNvwEDysz-&_nc_oc=Adr6IioiXbvuxWLLKNc5nSvSeNVbNoYrKxHva3elG7EOa2O4SKDI-eurJySOzMKxJ0-wMn54vqCa0TR4Ql0JmGsG&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=tphTTNXcR5b18OAFR_Uxag&_nc_ss=7b2a8&oh=00_Af7NwzbFQeRGBBbI3yjzk5o0geYU9sUgZlQLiWs8058C3A&oe=69FD0556" },
  { id: 34, nome: "Patrizia", cognome: "D’Aprile", genere: "Femmina", foto: "" },
  { id: 35, nome: "Antonio", cognome: "Fiorentino", genere: "Maschio", foto: "" },
  { id: 36, nome: "Luigi", cognome: "Finalizzi", genere: "Maschio", foto: "" },
  { id: 37, nome: "Mauro", cognome: "Federico", genere: "Maschio", foto: "" },
  { id: 38, nome: "Riccardo", cognome: "Fiorenza", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/611294233_1424252019549877_4384969365269934224_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IqmyKTHcG1EQ7kNvwG5Waym&_nc_oc=AdpA37fulF6YmtCWpzBYTfZd7K3H1FshBM4ofzN04gmZmwC2Pfh4vRF64gCBjr8AFOByUjWGeSZOsUGYAMQsiveQ&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=mnWnqZmPINo-fu0Su9qR-g&_nc_ss=7b2a8&oh=00_Af6rD5XrAuc-vcLmK5WRdBJcTQK0KZJ37MCsakinK2Ze_w&oe=69FD08FC" },
  { id: 39, nome: "Antonietta", cognome: "Gatto", genere: "Femmina", foto: "" },
  { id: 40, nome: "Gianni", cognome: "Garzia", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/492713119_1214128293895585_3895934599674212472_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UAADq5rT-bkQ7kNvwFTbL30&_nc_oc=AdpTMBeAzR6B28Uj17lfAR1Zh9Wpzjj3K5J0VaXN_A8jXYnYVcGPSC6mxiIf5ktOsmr59dxEL8sTfnVXSsooxTgg&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=UVcssYh5NWCjRft2eab7sg&_nc_ss=7b2a8&oh=00_Af5EtK7aSma4zH6hdTjReGllUYM2EpisDCwkgthyYWVUtA&oe=69FD079D" },
  { id: 41, nome: "Giulio", cognome: "Giaffreda", genere: "Maschio", foto: "" },
  { id: 42, nome: "Raffaele", cognome: "Gatto", genere: "Maschio", foto: "" },
  { id: 43, nome: "Giovanna", cognome: "Rizzello", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489516151_1198090432166038_7815340496410305767_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TcEYCV5DkEEQ7kNvwHFa3k6&_nc_oc=Ado23z90Dx-Sq1WF_ock5yaDKVeZLZUp9XOCEOeYQ98QoBlHV3BUuI9YexUKUvgq6V382sm-v0pxdPXssQvyNRWi&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=NmJf7-8D5trCu0OYHJ6FFA&_nc_ss=7b2a8&oh=00_Af4ZkIyayHqxJ51saBDkszCjzaiEDaIHQl-m_j1N7u7YhQ&oe=69FD1D11" },
  { id: 44, nome: "Rocco", cognome: "Giaffreda", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.6435-9/71142459_110628823673346_7466555427233202176_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=305nEMQ41GAQ7kNvwFzhbEB&_nc_oc=AdriTkmX0mZRxHzy3rjPfPHtYDpA_D5nNp7k19RVSUWSa6fwH6JClFr3_7yThIZZhIlVIs-gNLA54pKjinMyomJO&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=Wu3HoSDZHUfaW5tOLPm2Dw&_nc_ss=7b2a8&oh=00_Af40r9OFyLbrZa8kPY7RGMZv_1G_EIXltRfAGrz1mkjUtw&oe=6A1EC92D" },
  { id: 45, nome: "Stefano", cognome: "Greco", genere: "Maschio", foto: "" },
  { id: 46, nome: "Scoot", cognome: "Howe", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/571369606_122102889663086070_5757644138348605151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=rnBbAynzx64Q7kNvwHg2WQ4&_nc_oc=Adp_vjx0tPxXL11eQjFgEPRh2dCEBv29T0hP-70zDy9Sbqzs3x4gFoPD3Oh7NU0STIIH5Bijj89U1YufGTWfPirP&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=qRSkqO_MYgyzkUkZmMBFjA&_nc_ss=7b2a8&oh=00_Af4JL4CJfzP3E5sZqAGj9BMfK4XDukHINHfkFQUHVGSANg&oe=69FD1CCF" },
  { id: 47, nome: "Antonio", cognome: "Leopizzi", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/638991513_1464641635510915_7470173054023746635_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=gh_eKmY6Q_EQ7kNvwEAUjEZ&_nc_oc=AdrELsoaOAdza9olnr4eCcc3jX9PDZFduept6XFn2D48C2UPPDoxpoxGqpS_6edxjTSHaqWSBPYPR2eIOLLdGCYs&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=0Q4pHdc1Qxmm16HHiGPhDg&_nc_ss=7b2a8&oh=00_Af7fNt3-9cwoRTzSHlUy7Rc0FcKIZ4ZS2rlE3hRdazJxHg&oe=69FCF027" },
  { id: 48, nome: "Enzo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 49, nome: "Lorenzo", cognome: "Leopizzi", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/615421036_1434562435185502_254940414638251288_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=U6RJv6dKssAQ7kNvwF4a9z1&_nc_oc=Adr1wYO0xA55j6xnWRi1BfOr1fa4hqWPCWTVlyIwi_e1eIs0gVZL1_VS_oaSx9fPKk8LwipvoyBf3vgo6yRHCKgW&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=CFl-BZHIVCUTRcu3PcoYnA&_nc_ss=7b2a8&oh=00_Af6xlOiEeVMOvPI4HPOrddf6_hyXHb8J_uZHNM08GDLhXg&oe=69FD3150" },
  { id: 50, nome: "Mimmo", cognome: "Leopizzi", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489447887_1200019531973128_956028626999304717_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4YgI-ZXIUKQQ7kNvwGYKqEV&_nc_oc=AdoxXtQnWVez9mQcf9QIz8FKMnyQDUIxsY2YLjmuuQPwUbr1ymJgqnHq4LNEI1BVjjIobeGRzUlHI2Ipa64rHfHr&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=hrJ3eO-Xwv3en9s5vA_IPA&_nc_ss=7b2a8&oh=00_Af7A8hUw84R6TSVxkplPaBxjRJW4b45ywqFyr5mxK_BbMg&oe=69FD2D51" },
  { id: 51, nome: "Alessandro", cognome: "Mariano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/644139444_1471937938114618_3950623922575043868_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ibt_OcmvqzAQ7kNvwG6XS9A&_nc_oc=AdrZ_fwZgUHhZ2f6F4r8ic4RqxP-TehJqSslwqGYfag01cS2sRpSSVaUlwujCZlT81WKuGdpAueSVArfEayaC5zG&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=I11qNvBHhfpBfebkbp4Ycw&_nc_ss=7b2a8&oh=00_Af62nTed-QbC-R0YsRveGbJRsQk8JcC6zSW0rzNjAMIetA&oe=69FD0F3D" },
  { id: 52, nome: "Andrea", cognome: "Marsano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/615895414_1434563125185433_4516402542058630529_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=G1UdIlnED6wQ7kNvwEvWQT6&_nc_oc=AdpV7MVKFzYuMiuwGclIrVudPD1YfebmNQ55V4xO5UMHoEquObp30LeVwEOeLLQzTz50zPuGyQv6sJOTuT98Ey7w&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=amaFQhSGFdDnoJ08oHdiHg&_nc_ss=7b2a8&oh=00_Af5nlTn42p8O09wbY3SBZoWf02HnctyX8dTlNsybZaZJ3A&oe=69FD16D3" },
  { id: 53, nome: "Annamaria", cognome: "Mirizio", genere: "Femmina", foto: "" },
  { id: 54, nome: "Antonio", cognome: "Margarito", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/608517441_1424251846216561_5496830407896535255_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kKQTZtLik5oQ7kNvwGF2LRT&_nc_oc=AdpIKNz6On-yXcTJwa519KpEcMwfJ3KF4fEvIhAwsIGdOR0TMTh-oTqf3ymqOTPWk6RplhKajVtc8ClPJFhhIrwU&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=o2KudQG_13qYKFcNkOaPug&_nc_ss=7b2a8&oh=00_Af6lwHziaQUy5TDH2slT28WycBXY6i9f43DVbqJ0wabDLA&oe=69FCF674" },
  { id: 55, nome: "Carlo", cognome: "Milelli", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/241713516_4390307744395750_2759923485759217731_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=8B-3K6aEQOUQ7kNvwEZpsgs&_nc_oc=Adr1-LIh_7O0yQRxhPOMa8LoIsjpsd5B1EPsf5ZrEQK64fc1SUbJXB2Mt-c6YR92ZPGK0muDKLM2oTM0PhXyTNqE&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=vJvVSQnG3QRKVp_rk8tghg&_nc_ss=7b2a8&oh=00_Af708zh09vl5XDBf-ZuRhQMhFDZleQCT_wJNkSlZGfM7HA&oe=69FD3383" },
  { id: 56, nome: "Giuseppe", cognome: "Marzano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/592145539_1397681715540241_1973039946598016200_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1s2MpY8S99YQ7kNvwGsDfpE&_nc_oc=AdoUXZZOMOhKfgyHVvFrLi4jCsYf9TWu9Em37Qfycg3GIMkMoqBUeiltBipNqg5WQc97sDKY9TdC02PwRZrFAYAH&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=8JeSB845V3RGYnHGdGdlbw&_nc_ss=7b2a8&oh=00_Af75MvyBtl-Fy82zZTzXtJ2BGxH5ooelxVL0Xv0Xe5Vu8w&oe=69FCEC18" },
  { id: 57, nome: "Marcello", cognome: "Margari", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/490374090_1203772068264541_68905532951881318_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Sl5-bfnjugMQ7kNvwGdzmMa&_nc_oc=AdqKjolmEHfKpnOJwU5r4K8H9FF2XQm6zDafPIPxHfAGdkZ51yQEJO_vQDdMaXnsC-bIwrv5hJziaxAIufcFv16_&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=6L2Xrp0loFSW4v--yzYKrg&_nc_ss=7b2a8&oh=00_Af4G8CUptHiKTMT-8yjpGi2-1iN-HpeozwSTBeTR4dLuNQ&oe=69FD1F5E" },
  { id: 58, nome: "Matteo", cognome: "Mazzotta", genere: "Maschio", foto: "" },
  { id: 59, nome: "Maurizio", cognome: "Marrella", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489690373_1201537108488037_6256919628195663507_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tCIDkKCXRyYQ7kNvwHQWtLs&_nc_oc=AdqV2VbOireiGw_p_CagOC8PiRk2_StyOjaqVDK9Ngfv1KbkiOP6OLjmoG7w6RhTEQJDR_0HyzWf9eQbvtG_N2dV&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=03qUm640RJwLsj0CIj25IA&_nc_ss=7b2a8&oh=00_Af4A_Iw1kNZfJc35u3zMYAPzj8doBYQgejdvNMCnj4PufQ&oe=69FD3DE9" },
  { id: 60, nome: "Michele", cognome: "Maggio", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/515080510_24111195561826014_3808419733139553653_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=c7cdda&_nc_ohc=JYaPFCDqe9kQ7kNvwF5C0Jm&_nc_oc=AdoCDPRaeqthp2ueXWTOTv5mRxE6_2D_g0P-5_mnw-XfQbW3IEfXZf50806T1qhBCNuzyeS8JqU-6fgFPJ0L_umu&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=lg_1u76JQEV6nkhMCOTgYQ&_nc_ss=7b2a8&oh=00_Af7bCkTLcJsqOQVmzUgsxCYd5cTSHfbChYhTXyep3k2VEw&oe=69FD20BA" },
  { id: 61, nome: "Michele", cognome: "Marra", genere: "Maschio", foto: "" },
  { id: 62, nome: "Mimino", cognome: "Martignano", genere: "Maschio", foto: "" },
  { id: 63, nome: "Tiziano", cognome: "Moscatello", genere: "Maschio", foto: "" },
  { id: 64, nome: "Luigi", cognome: "Nicoletti", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/678766703_1516902603618151_3508963526300434816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9N6lu8vPKJUQ7kNvwEYsBzm&_nc_oc=AdqA0f8gEIb7GQ8Y54bpKBZlWV6_-K4mVMWVjDV0I4aSe3-c1DHrZM3iBGzNgTvnuIwcCPP11APdaZuBk726-AmD&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=mFW8jg7x7C8ERbP-cUWVyA&_nc_ss=7b2a8&oh=00_Af7EzxhxFz4k7ZU6z32yh1qiUXrIPMGhnSENVSkeWfUH3A&oe=69FD0413" },
  { id: 65, nome: "Antonio", cognome: "Notaro", genere: "Maschio", foto: "https://scontent.ffco3-1.fna.fbcdn.net/v/t39.30808-6/484103076_1175585227749892_8842765532867024157_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=bxDx7zH_UlUQ7kNvwEoHCd0&_nc_oc=AdoUiT0goGC2jpBh-q2EmK0lcO40UBEl1g9wnBNfIrF8bLtwylCeq_dQSmNmrTs0lTNp7D7B974Oq83PZ0gkc5rM&_nc_zt=23&_nc_ht=scontent.ffco3-1.fna&_nc_gid=BN3xmqQuaBbiwkpgN2b9CA&_nc_ss=7b2a8&oh=00_Af6fiybBEO8EJg5t9Zsnr6ytXYCtk_-EoXVwCHvldmQl0Q&oe=69FD8866" },
  { id: 66, nome: "Pasquale", cognome: "Napoleone", genere: "Maschio", foto: "" },
  { id: 67, nome: "Tommaso", cognome: "Nicoletti", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/611308477_1424252236216522_394716145350987565_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=D2K6jGoH5doQ7kNvwEWeStU&_nc_oc=AdrbVdIsVPAxtjkXHUFcnCBg7MtPvpDJ53KiBV-nseTkrXNTxpaZEmP8eDVED0UBGuvFJ51Bu-753GGhCr4nTfrU&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=NcUOrnCxkf3K5eTiBJGOlQ&_nc_ss=7b2a8&oh=00_Af46MSJuh5ZtSnhhOWFPo_-ROYrGUV9pFhxU_GhGTyrwyw&oe=69FD0F72" },
  { id: 68, nome: "Giuseppe", cognome: "Provenzano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/525990124_1295095462465534_8927265567371299596_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9Wbn_atlVf4Q7kNvwFy6afg&_nc_oc=AdoBijrSM0i8k4Kd1Eh1NcVofIkuhNLqjOO9wZsDszzPweC3bwPGP_QHKwl-nYVxSjXGYEwAUclnZcF4JGWuuBO0&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=mQrmVhtv6368Q6007Hjbdg&_nc_ss=7b2a8&oh=00_Af6ZlOhd_em3nN5ZI0abw3ooFNUNejJIP6VZtPbqVuFjiQ&oe=69FD1F7E" },
  { id: 69, nome: "Antonella", cognome: "Pellico", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/597848601_1405535334754879_6844864431005667700_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xUOmZnLvhDoQ7kNvwHayagi&_nc_oc=AdoJcrZZvvPdNLyNI7PcIaoTKqGtOrC0WTKyuz0yQfDTJyIbnlaFnhrBF7OG57C5mvX_yvGuC_fmc4NiZ6aaGkVQ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=rlvCfk1NQyav2gXBwz7PeA&_nc_ss=7b2a8&oh=00_Af5HtmCHlFZ4hWCEF5Bhs5EnsbU7Npfyqk36gzdM_yuYkg&oe=69FD1830" },
  { id: 70, nome: "Biagio", cognome: "Potenza", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489393408_1198053795503035_6710262197499639631_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ajLyqfgi2NoQ7kNvwEqI27x&_nc_oc=Adr3Co70gDSyZv--HxFfO7Ysy9PdRdJ_nKRYCw09k6JOCnlicRVOu5fl-V6jHo9wHMhkzHQizEjcn5WWWig8W4om&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=utI_zZyai4IVXrg8175xKQ&_nc_ss=7b2a8&oh=00_Af5Y4zs6RvnDXM6P-QFI2Cs0_yGbJ1m5bhPQussSBSqiMA&oe=69FD33FE" },
  { id: 71, nome: "Cristina", cognome: "Primiceri", genere: "Femmina", foto: "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/486249325_1186597219982026_5866448078268892721_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xnsc1hOPeJYQ7kNvwHn4QfS&_nc_oc=AdpSX4go3X1HiC8Um8xkNl2ZSK6ymHbV99bKarp01c70jbaLI0uK5kSssVLN-ZdvKuOkbDTyQ-03SsqKu_SsI-jl&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=TBx6y-8nYlSNeMNhamybQA&_nc_ss=7b2a8&oh=00_Af5ugLAkynYOMPW-Ca40viqAFzzFG-uqctBE7KYKzuSaNA&oe=69FD8D1F" },
  { id: 72, nome: "Fabiola", cognome: "Parlati", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/608765748_1423548602953552_7451703545746003189_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ypZHgqYQRtoQ7kNvwE7bFXx&_nc_oc=AdpTMkWsdGmGlhvn2bmmvEvzpbI_Zf95ewN4Vln0kmVwkY90xrftetUxkqPM2Xde0XKpqNGjUBzCRm9h5MMoIzeq&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=xs_Fs3SNE9gb0Dzd919NnA&_nc_ss=7b2a8&oh=00_Af7ElymzbT4HWcEPMbho8k8EuOej6krTK4tTTJW7eqYvYQ&oe=69FCECC4" },
  { id: 73, nome: "Giovanni", cognome: "Patera", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/463026965_7765159270250391_5469080663935159931_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=I6WsI0GFNVkQ7kNvwH65gnX&_nc_oc=AdoB8goQh6Ku7huPbw92E6yxDsUjs8QIDpDb6PvRSix5MOdfKe-ZmTaWXCNbIFeTkUXU6Z9nfzj2F0ixnVSzky9I&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=Cst6I2i2TUJ3hoB5NbYkAg&_nc_ss=7b2a8&oh=00_Af6-Z0k7OYBWk6dmKOt-XeUodoV9DKWVgdvPeXTZofA6FA&oe=69FD3BD2" },
  { id: 74, nome: "Letizia", cognome: "Leopizzi", genere: "Femmina", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/637779658_1464641702177575_9205981894369298051_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SbmBw0PeEJwQ7kNvwE9UeC6&_nc_oc=AdrVjxBXZNeDySglctInRHvxar6tU3mPskoLKYBtfZS_P1lfPmw1BegF0rDt_d0qOlGuP8nDcyQkTOeiT_z08WjL&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=YtAMddWZCSD1c-GCNH7hPQ&_nc_ss=7b2a8&oh=00_Af6ZbqpeNJHKRKBUQerXgNtPzUiJOZ52pfPpWXaRVkQtnw&oe=69FD13D2" },
  { id: 75, nome: "Luigi", cognome: "Pasanisi", genere: "Maschio", foto: "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/491837764_9787298491308960_3406430898574962348_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=sSp1JnD7wlMQ7kNvwHFmx9q&_nc_oc=AdpNLydlmx_eJXzSKhQTvP9AmHhnl3Sc8wqyI2xv5-NLRzEggpg2MSK58Wbj26eayNq_ZbSDrdri0tu2eb0kHXA7&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=PL_VXpkUtfn8xaaIqHNq0w&_nc_ss=7b2a8&oh=00_Af5Py8z9Rn4ykvljTQw76UG_yDs3qSPIyn-QODUtjAsQrw&oe=69FD67CE" },
  { id: 76, nome: "Marianna", cognome: "Pasanisi", genere: "Femmina", foto: "" },
  { id: 77, nome: "Paola", cognome: "Zingarelli", genere: "Femmina", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/489358976_1198089582166123_8741208038328876202_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MCP5-cbUxcoQ7kNvwH6fnxZ&_nc_oc=Adqqe0sWTnLpI6kBBfTr_LclSC2KpsdcsPuqB9reN4vgCE8qitlKwKstL03qWracm7k7KJc4AUcfUHiSxbg7XGtm&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=Vy56NravccdUHptYm0aTrw&_nc_ss=7b2a8&oh=00_Af6sJBMvdTC0fxeQtgpAT7KOq-BC9t2jBBGXWrQjoE_FFQ&oe=69FD248E" },
  { id: 78, nome: "Piera", cognome: "Pastore", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/648309509_1476389721002773_2728592677747988753_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ikXc-c5MAK0Q7kNvwHoM3tz&_nc_oc=AdovMb7wfgEiND3Me45IbrwwsOI4dR70m114O6915Ucs6INOnE38kX-U9DNLjnEDytR8_jlM4C0khlIXnZTVoqfA&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=MU3xnL5YCIbT2xme1vDnFw&_nc_ss=7b2a8&oh=00_Af6e0hEhfTh02hw-0psOeEGb_OWtmju_CYdAEBeBSv-PPA&oe=69FD25FA" },
  { id: 79, nome: "Rosy", cognome: "Piccinno", genere: "Femmina", foto: "" },
  { id: 80, nome: "Stefano", cognome: "Provenzano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489788491_1200019561973125_5078374287118482652_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4MdMXubFWXcQ7kNvwF9pbll&_nc_oc=AdodnPDQJlLFgW2Yf1dFm3Abd7VEnb0oXFY1dLGRtIw37HNPGp_UY-vwCaaHfdh0pQHw3jJwSkbutHj0GGvNxNoK&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=ZAPceEZGVwqIhJq0u3kbSA&_nc_ss=7b2a8&oh=00_Af5xE9pl3fzpNMhMmNpwXEtn5MetFyGB_pUq3T0Q0tgu1g&oe=69FD297D" },
  { id: 81, nome: "Fernando", cognome: "Quarta", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/490333769_1201537198488028_4265174963003212958_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YZxYtL2JT8MQ7kNvwEviaYH&_nc_oc=AdpNzAYUaDKi_UDLvE14FpdwUGUhzCS75hf_YzWYGJHBMVumUOi4Blu824nYDOsQ_NDIm9_Kx7Bse8Sjrf-XeSiF&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=2xyqoJL5uoWJ5pnkS_X8KQ&_nc_ss=7b2a8&oh=00_Af47a_TK8vW7Ct7KK4OtN2iMco5ac7CxUgs6n2eVvwZjFg&oe=69FD2C25" },
  { id: 82, nome: "Riccardo", cognome: "Tornesello", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/590791527_1397681115540301_3531264912356292952_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kn5qCKilGSYQ7kNvwGuszDw&_nc_oc=AdqAZ7U-jSAJrU20rYcVFzviZIEDNQHQp078TJ5I4ahPuk3h81VJPN0iytXZU5rdez-nuEkdECvS_exqQbrndADN&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=FJwbO7aXTcdJ89Zs3LgrFA&_nc_ss=7b2a8&oh=00_Af7XoiA-R16q1iBbpo-9KJwJyfFNQCaXNTGvuCuHJdAj5w&oe=69FD1351" },
  { id: 83, nome: "Antonio", cognome: "Ria", genere: "Maschio", foto: "" },
  { id: 84, nome: "Antonio", cognome: "Romano", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/648092356_1476386877669724_4553832059206464608_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=69_XrtWmB7UQ7kNvwEMD-jU&_nc_oc=AdqCugNlcpnDnOCSyQtpDaEWPWRXhcoPQdivFXf3SaFrom-d8IZJreRpSxwxrPpd3mGZ1y-ELx2F6o2-Sciyn4p2&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=aFM8sCUTjCpFXqLojTLJDw&_nc_ss=7b2a8&oh=00_Af4MdoAahwL_u05qX773hV14Rk2iSIDviCv3oo0cJne82g&oe=69FCEA62" },
  { id: 85, nome: "Carmelo", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 86, nome: "Francesco", cognome: "Romano", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/611734340_1424251609549918_6548305235494541383_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Nk-BqTBUwHsQ7kNvwH06UvQ&_nc_oc=AdortMlFqq0YCcpDfBxn2SsRjCJx6OcUpYxIv-HX9MyaCo5xwhHuheQG3lop1gFzIIEEx7O9UpcIjVle4rpvQUob&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=nTY27nso5436PJ8k3QfZyA&_nc_ss=7b2a8&oh=00_Af5De05gCBa2I_CVVEcxowDrYjgLiMNG4q367invndYqUg&oe=69FD11E6" },
  { id: 87, nome: "Giuseppe", cognome: "Ruberto", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641440841_1464642218844190_7180376024560716926_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=t_4LZSN-z6AQ7kNvwFbkX7E&_nc_oc=AdrBhsT5-MagmE_9EKN84Gqy7D2TxWKqbMRQPojISQXLexf5kgovgbJ5T1K5-0D--68qAMyxFInCsSIsugeB9gUy&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=EHfJejHvXRXFeUJnCcTjKg&_nc_ss=7b2a8&oh=00_Af4DIRaSrCa0a858X3iadPjGNZCRaVyWpA6tXbKxhtYFaA&oe=69FCF83E" },
  { id: 88, nome: "Giusy", cognome: "Romano Maggio", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489122698_1198089672166114_5194572830896795609_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pq26FNQBonAQ7kNvwGm49TZ&_nc_oc=AdppUK3MRFUwIO99eVhJ4sbx1ruD2YsYz5sSg8f10Bhx54X1MTflKCKo4fV_t2-t4izktivqAbgdTpX6Y1eHifLn&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=89kmP7oDvjrLpwe3hqrrMA&_nc_ss=7b2a8&oh=00_Af7mel5aoQulIqA4RvuMe3O1spoFMwkZ79WRXyPbpJPa7g&oe=69FD424A" },
  { id: 89, nome: "Laura", cognome: "Rimo", genere: "Femmina", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/489376916_1198090568832691_6580015310581471250_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xmr6kfTFXlEQ7kNvwEE9UUw&_nc_oc=AdocfQD_cDCvZ8FrgUzbJPh8QOfsMd2Td3DTj4zewlMs0nZcS6wJrMPlSMO-7RU7SlIWz60X0gb0A2WhBNCCRL5o&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=CRtY5kpRQQIYWlPg-PjrIg&_nc_ss=7b2a8&oh=00_Af5NusaUNKOZ3iXGi4KYMD7xHN4rZN-l0VEiMDaYLkyAvw&oe=69FD1F3F" },
  { id: 90, nome: "Mimma", cognome: "Ria", genere: "Femmina", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/489787943_1200020445306370_385163164300517341_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=sJHpzr560MUQ7kNvwH2WRyV&_nc_oc=Adp9kEVmW22t75RtPlsNc8jURMpWiE8sbpGbfQ_mry0xkDqjJMkG8Q1bvNjrKJX97f3jWPiUkN62rShMXhjYAgzo&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=YSIYECnCVPMF2K90s1wo-A&_nc_ss=7b2a8&oh=00_Af4dIq3robFRdryEuKgPZGGegtooynb39jGvOvR0hAEyeA&oe=69FD3B1D" },
  { id: 91, nome: "Tommaso", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 92, nome: "Antonio", cognome: "Schiattino", genere: "Maschio", foto: Schiattino },
  { id: 93, nome: "Carmelo", cognome: "Schirinzi", genere: "Maschio", foto: "https:e//scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/489968882_1202075971767484_5662208176014117829_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9U4IHKREUXAQ7kNvwHqAzw2&_nc_oc=AdqH2Z2TQ5SPKJLK3FDCD886KaACusv3kk-S9jYxKGUh9URqODopd2U_4j92q6k5ubsx9oeUq1YfHeDS_M4Xmu2y&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=uc8-s61BfEX1TNdfqmL2Jw&_nc_ss=7b2a8&oh=00_Af5WKkPwxzCjredqxqcEEGhTUZynb41X7xNuvGwOEJ1XJQ&oe=69FD2224" },
  { id: 94, nome: "Filippo", cognome: "Schiattino", genere: "Maschio", foto: "https://scontent.ffco3-1.fna.fbcdn.net/v/t39.30808-6/671349971_1505611614747250_9103235475883818725_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2x593TOUN3cQ7kNvwH5m0oO&_nc_oc=AdrsSR3xpoYGsGYUPVrjfty_74pkne8Nu-dnGyCm1HocHu4U8Ud7pOQ0XfV72nk5KCRYz9ouYDogBDrSusRin-7b&_nc_zt=23&_nc_ht=scontent.ffco3-1.fna&_nc_gid=Kv-VUTKjxTnkKZl3kIvaoA&_nc_ss=7b2a8&oh=00_Af679EII9aTo8a57HMNPe-bQ24L51seU-eXDE-6xktbChw&oe=69FD792F" },
  { id: 95, nome: "Francesca", cognome: "Sergi", genere: "Femmina", foto: "" },
  { id: 96, nome: "Luigi", cognome: "Sansone", genere: "Maschio", foto: "https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/492507303_1214128417228906_5631956730516290509_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_Gi-OeoQ-ioQ7kNvwFVCQKh&_nc_oc=Adrx0HJEeWbrnf7xcjQM8k8t4z1SJYZlf3E1Y7bS4xPaXM_pkBDvRjDBu79K53EsV0_QdoXPaOmBuf0cM3Gygw6C&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=fHcschujBD_5NxOpyj-gSg&_nc_ss=7b2a8&oh=00_Af67hju1dp1zTvRqnj5ocWL0k6fhl2GwTsGsoZq5aaMESw&oe=69FD25B4" },
  { id: 97, nome: "Luigi", cognome: "Solidoro", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/486576199_1188030849838663_632399286786525452_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vw-YPVpo7L4Q7kNvwEjUVf-&_nc_oc=Adpz4MaFGk6bS3Phfpy9leH9o-HN8a3vBzIxeip5ZVAEfUfzmrAHFOvZoQ-PEl1FIHW9k-gXa9IrH5pKmvNgaNzg&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=yfELHxRDKO0Kc145tHZxTQ&_nc_ss=7b2a8&oh=00_Af7DDKAt38RZ-BmwQXqUnoovLZIC_BCL-oZ2PMRlJQRouw&oe=69FD820F" },
  { id: 98, nome: "Maria Cristina", cognome: "Silvano", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/489427523_1198094065499008_1224777955651168183_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Mrnp_cVgui0Q7kNvwHoTjxX&_nc_oc=AdpKJ80mIKMvOSbXrjBpbk0mYvG3KC0wZk4XIf0hxmb807S3cT18IRYEOJvzOChaK8o2SaYv5l2BigMIs8grwlgt&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=zeZP5O8RyslsDX4iXVXwYg&_nc_ss=7b2a8&oh=00_Af5OrJhVp3O3bB8l4oVcltbQstw1CBy-QhrKI5NMxQaAAg&oe=69FD1E9F" },
  { id: 99, nome: "Paola", cognome: "De Santis", genere: "Femmina", foto: "" },
  { id: 100, nome: "Raffaele", cognome: "Seclì", genere: "Maschio", foto: "" },
  { id: 101, nome: "Rossano", cognome: "Specchiarello", genere: "Maschio", foto: "" },
  { id: 102, nome: "Stefano", cognome: "Seclì", genere: "Maschio", foto: "" },
  { id: 103, nome: "Tiziano", cognome: "Schirinzi", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/490059810_1201533095155105_6800412201914572888_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=31Ds9mqzXLQQ7kNvwELx47b&_nc_oc=AdrPPOeuuRpN3cnSfJyU0zcoyJPcRBqc16EGc6t0_YxRXDFqiGj67CB7ykyCr5pSmvvlxAKRfTIUewv83CqH-maI&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=Vnx9jFFU_gn5mkUR_F1F7Q&_nc_ss=7b2a8&oh=00_Af4OJQg57stwgJ1zK_5eGAT2kvKe6fWk4sTnuaj9mJMtwQ&oe=69FD297E" },
  { id: 104, nome: "Tommaso", cognome: "Sabato", genere: "Maschio", foto: "" },
  { id: 105, nome: "Pierluigi", cognome: "Toma", genere: "Maschio", foto: Pierluigi },
  { id: 106, nome: "Biagio", cognome: "Tedesco", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/490018908_1201537001821381_7788161436983509331_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mvGNUfJfzE4Q7kNvwHOUkfJ&_nc_oc=AdpF3RQbixb_CxGIoNJ0d9YuRuaGJcwy_CEUTi1BoFz3mqWcMWat5Cxjma-dO27nVQLv9h3gyYy76yBLs54CWUh-&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=xVELz-Zovor_6wjImlBtEw&_nc_ss=7b2a8&oh=00_Af5gzlYBL0Q_BPFEe4aT6phlXshS18c08wnO0DW3KcbNTA&oe=69FD2EC9" },
  { id: 107, nome: "Biagio", cognome: "Tornesello", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.6435-9/36930996_10216331821558826_2059854323612909568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ug2986lHtrkQ7kNvwE2gvOh&_nc_oc=Adqkzx0vvDp-69OX4XfjWfIrmnf5ZGKCjfnIa2NBkZwkOvBxzLcGwsUEGdS9N2oq4wiOPgHtk4dLs-bem5wBtcK7&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=s46Q7bLMl_rMX4tWJfW4CA&_nc_ss=7b2a8&oh=00_Af4fE0g8Daj06Jufy4KwgHeoY6ZBn5gndrx3mdx_Al-Oug&oe=6A1EABB9" },
  { id: 108, nome: "Claudia", cognome: "Tempesta", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/648679571_1476392987669113_5852076322184431004_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Obv5UoxzSAwQ7kNvwF1eNAE&_nc_oc=AdqNY0Zd5Wk6Q79EYTzLFgHZokVsqGVpMNw0zZgJggD20LOcpX7lkGO50v-clsv2ESKTpLR43ONW1tTR2EYz38Ai&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=urgvh5QNUp4SdtOopXnBQA&_nc_ss=7b2a8&oh=00_Af6ElZJb30SsA07IVKZ7p2eFaxzzAGUriod8RdrrWxU7-g&oe=69FD0B60" },
  { id: 109, nome: "Giovanni", cognome: "Tornesello", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t51.82787-15/632305911_18351261556229128_5022839193017412624_n.webp?stp=dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=3pZmek2Mf6MQ7kNvwG4PBFI&_nc_oc=AdpB7VN7h1n0cZQBQCAYHjib-qtSkH39CSvUPNtExnbCKt8k-9Mylq2KRm81LZ2hb1sr5jL8vP4xh3L2MalHiCx8&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=UBK3WEev3itQ2GadASSa3w&_nc_ss=7b2a8&oh=00_Af5fu8lXz_vtuhzj6iIV1fKewMojfX_1HaCwPk4Jrp54Ag&oe=69FD057B" },
  { id: 110, nome: "Piero", cognome: "Tempesta", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/640261739_1464641895510889_4800416207100067314_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TnGAghbt_lYQ7kNvwHIGYj4&_nc_oc=AdrUGyidriXHN_fByX_6NKFnBWwzq5vUGPXka-BgjZChfXhgC3gPdADpN0t5fw6AmESV-NalwC__3wy-_oPO5RaZ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=jGLxDwggamH1cudNzy9HFw&_nc_ss=7b2a8&oh=00_Af5XxmiEhKtShylVgdEC94-Y7OuGwa6vyRWSzgEyd1XV8Q&oe=69FD17C5" },
  { id: 111, nome: "Antonio", cognome: "Vitartali", genere: "Maschio", foto: "" },
  { id: 112, nome: "Marina", cognome: "Verardi", genere: "Femmina", foto: "" },
  { id: 113, nome: "Rosanna", cognome: "Venuti", genere: "Femmina", foto: "" },
  { id: 114, nome: "Carmine", cognome: "Negro", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/615421594_1434562998518779_1165900426986555645_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-Q6w86bgr9AQ7kNvwEx2rnp&_nc_oc=Adpbl7U_IKkZ8cLM98HN8GrgYhpZJGmmD47Oa5BzZ-v0g0KTa_x_Vua9cxJaEzj-J5fdwR4wqp5GxsIuhh6tjuad&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=1us85G1729AJB8Jag6L0YA&_nc_ss=7b2a8&oh=00_Af4rtqpQHDHgpJQGSbm_R0p8J9wMhBEyLafLs3uhB0y1Ig&oe=69FD1ABE" },
  { id: 115, nome: "Antonio", cognome: "Tornesello", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/599576236_25538710299074526_9104656808544089601_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1kWyjwML4yUQ7kNvwFSzP1h&_nc_oc=AdopO-lxhWr6OEqSM0AmyNwfBprcpU4yiSZYxZbWRZ6LPZbYs17XNiP0wUJFhVJqejqENeM6Ngri3sW8LY7lIwX4&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=qyLErX1E-WdexmPlgLyS6Q&_nc_ss=7b2a8&oh=00_Af6CA1QUN4N4JvsDAR_OKA6B82yg8T1YhsiG4Y5szYN6OA&oe=69FD2A8D" },
  { id: 116, nome: "Mimino", cognome: "Barone", genere: "Maschio", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/484358496_3286728761466724_2530531936620679043_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VdgzNl9G1IYQ7kNvwHR2Qlw&_nc_oc=Adp6pcEy2Pnbo5BlNkot6fnwu4EbxgcC5jBpzbFX0DM0MTZ_uyhau3xWYQj-XjlV7W6BOk5zaYjrG2rcSE9C5VUk&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=zmE0KEzNUFEbsIknURs8iQ&_nc_ss=7b2a8&oh=00_Af4mJWsinCxo8KkPtovXKbfq5kpiXwk0J-ew--5mzltg3A&oe=69FD1F62" },
  { id: 117, nome: "Carmela", cognome: "Cataldo", genere: "Femmina", foto: "https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/495015026_1221191496522598_1980392800472384110_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UkhxHBR-W-IQ7kNvwH2A_tW&_nc_oc=AdpzuzNw_z5KS6jLBsrA0O03KCd3rkKRT4R8T4cfm0_BnbJNjA_Il0TNLKru9d22JOnTkgQYzyYSh4FISL13TKae&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=HgB73bGTKNEggRgNVcFleg&_nc_ss=7b2a8&oh=00_Af60Tocf57uxW43JLugnSS6WXRu75xYIEq2jLgHkZEZb0A&oe=69FD2C5E" },
  { id: 118, nome: "Lorenzo", cognome: "Leopizzi Jr", genere: "Maschio", foto: Lorenzo },
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