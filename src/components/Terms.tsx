"use client";

import Navbar from '../components/Navbar';
import Sidebar from '@/components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Terms = () => {
    const isMobile = useMediaQuery({ maxWidth: 450 });
    const [drawerShow, setDrawerShow] = useState(false);
    useEffect(() => {
        setDrawerShow(!isMobile);
    }, [isMobile]);
    
    return (
        <>
        <CssBaseline />
        <Navbar drawerShow={drawerShow} setDrawerShow={setDrawerShow} />
        <Sidebar drawerShow={drawerShow} />

        <div style={{ marginTop: 65, marginLeft: drawerShow ? '60px' : 0 }}>
            <div className="GameContainerGrid" style={{ background: '#000' }}>
                <div className="GameContainerGamesWrapper">
                    <div style={{ margin: '0 5px', position: 'relative', padding: '10px' }}>
                        <div className="GameInfo_roundedCornersContainer">
							<p>
								Welcome to H5players! We (H5players, a company established in the Netherlands - hereafter referred to as 'H5players', 'we', 'our' or 'us') operate a website, accessible at 
								<a href="https://H5players.com" target="_blank" rel="noopener noreferrer nofollow">https://H5players.com</a>. 
								In this document we explainthe terms of use for our H5players Website. 
								The H5players Website may include access to virtual environments, games and other content, as well as downloadable software or applications for use on personal computers, tablets, mobile devices or phones. All users of the H5players Website (“Website Visitors”) are subject to the following terms and conditions of use (these “Terms of Use”).
							</p>
							<p>
								Please read these Terms of Use carefully before accessing or using any part of this H5players Website. By accessing or using this H5players Website, you agree that you have read, understand and agree to be bound by these Terms of Use, as amended from time to time by H5players. If you do not wish to agree to these Terms of Use, do not access or use any part of this H5players Website.</p><p>H5players may revise and update these Terms of Use at any and if we do so, we will notify you by posting the revised Terms of Use on the H5players Website. Your continued use of the H5players Website means that you accept and agree to the revised Terms of Use. If you disagree with the Terms of Use or are dissatisfied with this H5players Website, your sole and exclusive remedy is to discontinue using this H5players Website.
							</p>
							
							<details>
								<summary><h5 className="detail-title"> Use of this website</h5></summary>
								<p>You agree to use the Site only for lawful purposes:</p>
								<p>(a) Specifically you agree not to do any of the following: (1) upload to or transmit on the H5players Website any defamatory, indecent, obscene, harassing, violent or otherwise objectionable material, or any material that is, or may be, protected by copyright, without permission from the copyright owner; (2) use the H5players Website to violate the legal rights (including the rights of publicity and privacy) of others or to violate the laws of any jurisdiction; (3) intercept or attempt to intercept electronic mail not intended for you; (4) misrepresent an affiliation with any person or organization; (5) upload to or transmit on the H5players Website any advertisements or solicitations of business; (6) restrict or inhibit use of the H5players Website by others; (7) upload or otherwise transmit files that contain a virus or corrupted data; (8) collect information about others (including e-mail addresses) without their consent; (9) download a file or software or include in a message any software, files or links that you know, or have reason to believe, cannot be distributed legally over the H5players Website or that you have a contractual obligation to keep confidential (notwithstanding its availability on the H5players Website); (10) post “spam,” transmit chain letters or engage in other similar activities; (11) solicit, provide or exchange any personal information, including but not limited to user names or passwords; (12) “stalk,” “phish,” abuse or harass another user, or attempt to do any of the foregoing; or (13) engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the H5players Website, or which, as determined by H5players, may harm H5players or Website Visitors or expose them to liability. Without limiting any of the foregoing, you also agree to abide by any code of conduct and policies applicable to the H5players Website or any service available on the H5players Website.</p>
								<p>(b) Any content and/or opinions uploaded, expressed or submitted to a message board, blog, chatroom or any other publicly available section of the H5players Website (including password-protected areas), and all articles and responses to questions, other than the content provided by H5players, are solely the opinions and responsibility of the person or entity submitting them and do not necessarily reflect the opinions of H5players. You understand and acknowledge that you are responsible for whatever content you submit, and you, not H5players, have full responsibility for such content, including its legality, reliability and appropriateness. By uploading or otherwise transmitting material to any area of the H5players Website, you warrant that the material is your own or is in the public domain or otherwise free of proprietary or other restrictions and that you have the right to post it to the H5players Website. You grant to H5players the royalty-free, irrevocable, perpetual, transferable and world-wide right and license to use all content you upload or otherwise transmit to the H5players Website in any reasonable manner H5players chooses, including, but not limited, to copying, displaying, performing or publishing it in any format or media whatsoever, modifying it, incorporating it into other material or making a derivative work based on it.</p>
								<p>(c) Except as expressly authorized by H5players in writing, you may not reproduce, sublicense, distribute, sell or exploit for any commercial purposes (i) any part of this H5players Website or its content, (ii) access to this H5players Website or (iii) use of this H5players Website or of any services or materials available through  this H5players Website, including, without limitation, by leasing access to the H5players Website (e.g., at a cyber café), gathering and selling virtual items, codes, pre-paid game cards, or virtual currency through the H5players Website, or otherwise.</p>
								<p>(d) H5players reserves the right, but does not assume any responsibility, to (1) remove any material posted on the H5players Website which H5players, in its sole discretion, deems inconsistent with the foregoing commitments (including any material that H5players has reason to believe constitutes, or for which H5players has received notice of its constituting, a copyright infringement; or if the material is in breach with the applicable data protection laws and regulations); (2) monitor and/or record communications between and among Website Visitors for as far as allowed under the applicable law; and (3) terminate any user's access to all or part of the H5players Website. However, H5players can neither review all material or communication before it is posted on the H5players Website nor ensure prompt removal of objectionable material after it has been posted. Accordingly, H5players assumes no liability for any action or inaction regarding transmissions, communications or content provided by third parties. H5players reserves the right to take any action it deems necessary to protect the personal safety of Website Visitors and the public; however, H5players has no liability or responsibility to anyone for performance or non-performance of the activities described in this paragraph.</p>
								<p>(e) Your failure to comply with the provisions of (a), (b) or (c) above may result in the termination of your access to the H5players Website and may expose you to civil and/or criminal liability.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Privacy: protection of personal information</h5></summary>
								<p>H5players's use of your personal information and your responsibilities in connection with protecting your privacy are described our <a href="https://H5players.com/privacy" target="_blank" rel="noopener noreferrer nofollow">Website Privacy Statement Policy</a>.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Uploads to your devices</h5></summary>
								<p>Please note that if you are using downloadable applications from H5players, updates to your device's systems or firmware may render your use of the applications incompatible. H5players does not warrant that the H5players Website or any H5players applications will be compatible with any updates to, or prior versions of, your devices. H5players may, but is not obligated to, provide you with updates to the H5players Website or applications that improve compatibility with updated mobile devices.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Data charges</h5></summary>
								<p>To the extent that your use of the H5players Website or any H5players application requires, or permits utilization of, wireless, cellular data, or internet access, you are independently responsible for securing the necessary data access service. For example, with respect to your mobile devices, the provider of your data plans may charge you data access fees in connection with your use of the H5players Website or H5players applications. You are solely responsible for all such charges payable to third parties.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Copyright restrictions/use of content</h5></summary>
								<p>The entire contents of this H5players Website (including all information, text, displays, images and audio and any software made available through or in connection with the H5players Website) and the design, selection and arrangement thereof, are proprietary to H5players or its affiliates or licensors and are protected by Dutch and international laws regarding copyrights, trademarks, trade secrets and other proprietary rights. You are authorized only to use the content on the H5players Website for personal use related to your role as a current or prospective user of the H5players Website. You may not copy, modify, create derivative works of, publicly display or perform, republish, store, transmit or distribute any of the material on this H5players Website without the prior written consent of H5players, except to: (a) store copies of such materials temporarily in RAM, (b) store files that are automatically cached by your web browser for display enhancement purposes, and (c) print a reasonable number of pages of the H5players Website; provided in each case that you do not alter or remove any copyright or other proprietary notices included in such materials. Neither the title nor any intellectual property rights to any information or material in this H5players Website are transferred to you, but remain with H5players or the applicable owner of such content.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Software and downloads</h5></summary>
								<p>If H5players offers downloads of, or access to, software on this H5players Website and you download or otherwise access such software, the software (including any data or images incorporated in or generated by the software) is licensed to you. You do not receive title to this software and you may not distribute or use the software other than for the purpose of using the applicable feature or service of the H5players Website as offered by H5players. You may not modify, adapt, reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of such software. Except as expressly provided, you may not create any derivative works of the software or any services available on the H5players Website. This license is revocable at any time without notice and with or without cause. You agree to destroy or return to H5players all copies of the software upon revocation of your license to the software and/or termination of your access to the H5players Website. The software is subject to all restrictions on use, disclaimers of warranties and other provisions in these Terms of Use. In the event that the software is also subject to a separate end user license agreement, the terms of such end user license agreement shall control any conflict between those terms and these Terms of Use.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Access and interference</h5></summary>
								<p>You agree that you will not (a) use any robot, spider or other automatic device, process or means to access the H5players Website, (b) use any manual process to monitor or copy any of the material on this H5players Website or for any other unauthorized purpose without the prior written consent of H5players, (c) use any device, software or routine that interferes with the proper working of the H5players Website, (d) attempt to interfere with the proper working of the H5players Website, (e) take any action that imposes an unreasonable or disproportionately large load on H5players's infrastructure, or (f) access, reload or “refresh” transactional pages, or make any other request to transactional servers, more than once during any three (3) second interval.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Trademarks</h5></summary>
								<p>H5players's name and logos, and all related names, logos, product and service names, designs and slogans contained in the H5players Website or any software provided or accessed in connection therewith are trademarks of H5players, its affiliates, licensors and/or contractors unless otherwise clearly specified in writing. You may not use such marks without the prior written permission of H5players. All other names, brands and marks are used for identification purposes only and may be the trademarks of their respective owners.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Liability of H5players and its licensors</h5></summary>
								<p>H5players does not assume any liability for the materials, information and opinions provided on, or available through, the H5players Website (the “H5players Website Content”). Reliance on the H5players Website Content is solely at your own risk. H5players disclaims any liability for injury or damages resulting from the use of the H5players Website and any H5players Website Content.</p><p>The website is provided “as is” and “as available,” without any warranty or guaranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. H5players, its affiliates and service providers are neither responsible nor liable for any indirect, incidental, consequential, special, exemplary, punitive or other damages arising out of or relating in any way to the website. H5players shall not be liable under these Terms of Use or otherwise in connection with the website for an amount more than EUR 500 (five hundred euros).</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Interaction with other users</h5></summary>
								<p>As a condition of access to the H5players Website, you release H5players (and its shareholders, partners, affiliates, directors, officers, subsidiaries, employees, agents, suppliers, third party information providers, licensors, licensees, distributors and contractors) from claims, demand and damages (actual and consequential) of every kind and nature arising out of or in any way connected with any dispute you may have with any other user of the H5players Website. H5players will have the right but not the obligation to resolve disputes between Website Visitors relating to use of the H5players Website, and to the extent that it elects to resolve such disputes, H5players will do so in good faith H5players Website. You release H5players (and its shareholders, partners, affiliates, directors, officers, subsidiaries, employees, agents, suppliers, third party information providers, licensors, licensees, distributors and contractors) from claims, demands and damages (actual and consequential) of every kind and nature arising out of or in any way connected with H5players's resolution of such disputes.</p>
							</details>

							<details>
								<summary><h5 className="detail-title"> Indemnification</h5></summary>
								<p>You agree to indemnify and hold harmless H5players and its shareholders, partners, affiliates, directors, officers, subsidiaries, employees, agents, suppliers, third party information providers, licensors, licensees, distributors, contractors and others involved in the H5players Website or the delivery of products, services or information over the H5players Website, from and against any and all liabilities, expenses, damages and costs, including reasonable attorney's fees, arising from any violation by you of these Terms of Use or your use of the H5players Website or any products, services or information obtained from the H5players Website.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Comments and submissions</h5></summary>
								<p>H5players welcomes your comments. All comments, suggestions or other information sent by you to H5players or its advertisers or business partners in response to solicitations on this H5players Website will become H5players's property and you agree that all intellectual property rights therein are herewith transferred in advance to H5players. For avoidance of doubt, H5players shall own any developments by H5players or on its behalf arising out of your comments, suggestions or other submissions. To the extent H5players does not own such materials, you grant and agree to grant H5players a non-exclusive, royalty-free, worldwide license to utilize, create derivative works of, distribute and sublicense such materials for any purpose in connection with H5players's web H5players Websites, products and services. You have no expectation of any review, compensation or consideration of any type for all submissions hereunder.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Links to other websites</h5></summary>
								<p>The H5players Website contains links to other H5players Websites on the Internet. H5players is not responsible for, and does not endorse, the content, products, services or practices of any third-party websites. This includes, without limitation, websites framed within the H5players Website, as well as third-party advertisements. H5players does not make any representations regarding the quality, content, accuracy or suitability for your viewing or use of these third-party websites and third-party advertisements. Your use of third-party websites is at your own risk and subject to the terms and conditions of use of such a website. In the event that you choose to purchase a product or service from a third party, H5players is not responsible for such products or services, as it is not party to such transaction and is not liable for any direct or indirect costs or damages arising out of any dispute between you and such third party. Neither H5players, its licensors or contractors, makes any express or implied representations or warranties regarding the goods or services offered by such merchant, including, but not limited to, warranties of merchantability, fitness for a particular purpose, title, non-infringement or compatibility.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Copyright and other intellectual property infringement</h5></summary>
								<p>H5players may, in appropriate circumstances and in H5players's sole discretion, terminate your access to this H5players Website if it deems you to be a repeat infringer of intellectual property rights connected to the H5players Website. H5players may also, in its sole discretion, limit your access to the H5players Website and/or terminate your membership if you infringe any intellectual property rights of others, whether or not there is any repeat infringement.</p><p>Please contact our designated agent at <a href="mailto:privacy@H5players.com">privacy@H5players.com</a> if you become aware of any content that may infringe the copyright, other intellectual property right or privacy rights of a third party or that you believe to be in violation of these Terms of Use.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Choice of law</h5></summary>
								<p>These Terms of Use shall be governed in all respects by and construed in accordance with the laws of the Netherlands, without regard to its conflicts of law principles. If your compliance with or our rights under these Terms of Use is/are in any way affected by consumer protection laws in your country of residence, you should not use our H5players Website.</p><p>Any dispute arising out of or in connection with these Terms of Use or your use of the H5players Website, shall be submitted to the competent court of Amsterdam, the Netherlands. If you are a resident in a member state of the EU or a country in which this clause is prohibited by local law, this clause does not apply to you and does not deprive you of the protection of the mandatory provisions of the consumer protection laws in your country.</p>
							</details>
							
							<details>
								<summary><h5 className="detail-title"> Miscellaneous</h5></summary>
								<p>These Terms of Use, as they may be amended from time to time, completely and exclusively state the agreement between you and H5players with respect to the H5players Website, and no other terms that may have been communicated to you orally or in any other manner shall have any force or effect. Any cause of action you may have with respect to the H5players Website must be commenced within one (1) year after the claim or cause of action arises or such claim or cause of action is barred.</p><p>You agree and acknowledge that your violation of any restrictions in these Terms of Use on the use of the H5players Website, H5players Website Content, or software or services available on or through the H5players Website, or your use or disclosure of confidential information in a manner inconsistent with the provisions of these Terms of Use, may cause H5players irreparable damage for which remedies at law may be inadequate. H5players's licensors and contractors are express third-party beneficiaries of any terms in these Terms of Use that are applicable to their products or services, including disclaimers of warranty and limitations of liability, and shall have the right to enforce directly against you all of your applicable representations, warranties, covenants, indemnifications and obligations under these Terms of Use.</p><p>If any part of these Terms of Use is unenforceable, the unenforceable part shall be construed to reflect, as nearly as possible, the original intentions of the parties. The other provisions of these Terms of Use shall remain in full force and effect.</p><p>The terms related to protection of H5players's intellectual property rights, disclaimer of warranties limitation of liability, choice of law, indemnification obligations and any licenses granted by you to H5players shall survive any termination of these Terms of Use.</p><p>H5players's failure to insist upon or enforce strict performance of any provision of these Terms of Use shall not constitute a waiver of the provision. Neither a course of dealing or conduct between you and H5players nor any trade practices shall be deemed to modify these Terms of Use.</p>
							</details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
