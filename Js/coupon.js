/* =========================================
   SHOPZONE COUPON POPUP
   SHOW AFTER 3 SECONDS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const popup =
        document.getElementById("welcomePopup");

    const closeBtn =
        document.getElementById("popupClose");

    const overlay =
        document.querySelector(".popup-overlay");

    const copyCoupon =
        document.getElementById("copyCoupon");

    const couponCode =
        document.getElementById("couponCode");


    if (!popup) return;


    /* ==============================
       SHOW POPUP AFTER 3 SECONDS
    ============================== */

    setTimeout(function () {

        popup.style.display = "flex";

    }, 3000);


    /* ==============================
       CLOSE BUTTON
    ============================== */

    if (closeBtn) {

        closeBtn.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }


    /* ==============================
       CLICK OUTSIDE TO CLOSE
    ============================== */

    if (overlay) {

        overlay.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }


    /* ==============================
       COPY COUPON CODE
    ============================== */

    if (copyCoupon && couponCode) {

        copyCoupon.addEventListener("click", function () {

            const code =
                couponCode.textContent.trim();

            navigator.clipboard.writeText(code)
                .then(function () {

                    copyCoupon.innerHTML =
                        '<i class="fa-solid fa-check"></i> Copied!';

                    setTimeout(function () {

                        copyCoupon.innerHTML =
                            '<i class="fa-regular fa-copy"></i> Copy';

                    }, 2000);

                })
                .catch(function () {

                    alert(
                        "Coupon Code: " + code
                    );

                });

        });

    }

});

/* =========================================
   SHOPZONE COUPON POPUP
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const popup =
            document.getElementById(
                "welcomePopup"
            );

        const closeBtn =
            document.getElementById(
                "popupClose"
            );

        const overlay =
            document.querySelector(
                ".popup-overlay"
            );

        const couponInput =
            document.getElementById(
                "couponInput"
            );

        const applyCouponBtn =
            document.getElementById(
                "applyCouponBtn"
            );

        const couponMessage =
            document.getElementById(
                "couponMessage"
            );


        if (!popup) return;


        /* =================================
           SHOW POPUP AFTER 3 SECONDS
        ================================= */

        setTimeout(function () {

            popup.style.display = "flex";

        }, 3000);


        /* =================================
           CLOSE POPUP
        ================================= */

        if (closeBtn) {

            closeBtn.addEventListener(
                "click",
                function () {

                    popup.style.display = "none";

                }
            );

        }


        /* =================================
           CLICK OUTSIDE
        ================================= */

        if (overlay) {

            overlay.addEventListener(
                "click",
                function () {

                    popup.style.display = "none";

                }
            );

        }


        /* =================================
           APPLY COUPON
        ================================= */

        if (
            applyCouponBtn &&
            couponInput
        ) {

            applyCouponBtn.addEventListener(
                "click",
                function () {

                    const coupon =
                        couponInput.value
                            .trim()
                            .toUpperCase();


                    /* Empty */

                    if (!coupon) {

                        couponMessage.textContent =
                            "Please enter a coupon code.";

                        couponMessage.className =
                            "error";

                        return;

                    }


                    /* Valid Coupon */

                    if (coupon === "SHOP200") {

                        /*
                         * 50% discount
                         */

                        localStorage.setItem(
                            "shopzoneCoupon",
                            JSON.stringify({
                                code: "SHOP200",
                                discount: 50,
                                type: "percentage"
                            })
                        );


                        couponMessage.textContent =
                            "✓ Coupon applied! 50% discount added.";

                        couponMessage.className =
                            "success";


                        applyCouponBtn.textContent =
                            "Applied ✓";

                        applyCouponBtn.disabled =
                            true;


                        couponInput.disabled =
                            true;


                        /*
                         * Close popup after 1.5 sec
                         */

                        setTimeout(function () {

                            popup.style.display =
                                "none";

                        }, 1500);


                    }

                    else {

                        couponMessage.textContent =
                            "✕ Invalid coupon code.";

                        couponMessage.className =
                            "error";

                    }

                }
            );


            /* Enter key */

            couponInput.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {

                        applyCouponBtn.click();

                    }

                }
            );

        }

    }
);
