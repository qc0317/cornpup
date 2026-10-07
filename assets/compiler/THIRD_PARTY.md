Browser C++ practice compiler

Pinned dependencies: browsercc0.1.1 (Daniel Bertalan, MIT), @bjorn3/browser_wasi_shim0.4.2 (MIT OR Apache2.0).
Sources: https://github.com/BertalanD/browsercc and https://github.com/bjorn3/browser_wasi_shim .
Clang/LLVM compiler and linker use the LLVM project license, Apache2.0 with LLVM exceptions: https://github.com/llvm/llvm-project/blob/main/LICENSE.TXT .
Toolchain binaries and sysroot are delivered from the user-owned HTTPS static resource host. Student programs execute in a dedicated browser WebWorker using only WASI input/output; no server-side program execution is provided.
Full upstream license notices must be retained with distributed vendor assets.
