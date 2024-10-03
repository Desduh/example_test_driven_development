# 📷 Image Registration and Resampling Techniques Applied to Pattern Recognition Problems

## 🧑‍🏫 Project Principal Investigator: Fabrício G. M. de Carvalho, Ph.D.

## 🎓 Scholarship Student: Carlos Eduardo Falandes

## 📝 Project Summary:
In remote sensing, the study of resampling and image registration techniques is essential for Earth observation. Resampling allows image resizing, enabling comparison with other images captured in different ways. Registration aligns different images that share common regions. These techniques are crucial for procedures such as change detection and pattern recognition, enabling important analyses for regulatory agencies and agricultural producers. This work implements and tests resampling techniques like Nearest Neighbor, Bilinear, and Bicubic, as well as studying feature detection and description techniques for image registration.

This work has produced several publications, including:
- A paper at ERI-Go 2023 titled [Preliminary Quantitative Analysis of Digital Image Resampling Methods Applicable to Different Types of Geometric Shapes](https://sol.sbc.org.br/index.php/erigo/article/view/27253).
- An extended abstract considered one of the top 20 at the Fatec Monitoring Program Meeting in 2023, available [here](https://publicacoescesu.cps.sp.gov.br/monitoria/article/view/303).
- An abstract on corner detection applied to satellite image registration at the Science Business Connection in 2024.
- Technical reports and summaries of the scientific initiation project.

## 🎯 Project Objectives:
- **Investigate resampling techniques**: Evaluate the effectiveness of Nearest Neighbor, Bilinear, and Bicubic resampling techniques and how they affect image quality and registration accuracy.
- **Analyze the impact of registration techniques**: Study how different resampling methods influence the image registration process, focusing on the final accuracy and quality of registered images.
- **Conduct quantitative analyses**: Quantitatively examine changes in geometric shape contours and the influence of resampling techniques on image registration, identifying best practices for different scenarios.

## 🔍 Conclusions:
The results indicate that:
- Nearest Neighbor resampling performs worse, especially in terms of contour accuracy.
- Bilinear and Bicubic resampling stand out, with Bicubic showing superior visual quality in smaller reductions.
- For image registration, Bicubic resampling, despite higher computational costs, introduces fewer errors in the final process.
- The choice of resampling method directly impacts the accuracy and quality of images, influencing subsequent processing steps such as registration, which is essential for geographic monitoring applications.

## 📂 Project Directory Structure:

   ### 🗂️ mgt\
      Project management artifacts, including project plan, non-technical documentation, etc.
   
   ### 📑 doc\
      Technical documentation
   
   ### 💻 src\
      Source code
        * 🧩 examples\
             Code snippets to be tested and used in the main system.
        * 🛠️ application\
             Main project application, including all components after testing and integration.
   
   ### 📚 references\
      Document references such as conference papers, journal papers, etc.
