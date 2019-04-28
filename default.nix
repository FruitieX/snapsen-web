with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "env";

  # needed by node-gyp
  PYTHON = "${pkgs.python2}/bin/python";

  buildInputs = [
    nodejs-10_x
    yarn
  ];
}
