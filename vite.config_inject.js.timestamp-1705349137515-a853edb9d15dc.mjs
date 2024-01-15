// vite.config_inject.js
import { resolve } from "path";
import { readFileSync } from "fs";
import { deflateSync } from "zlib";
import commonjs from "file:///Users/cdrake/Git/niivue/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import { defineConfig } from "file:///Users/cdrake/Git/niivue/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Users/cdrake/Git/niivue";
function readAndZipNiivueUmd() {
  const niivueUmd2 = readFileSync("./dist_intermediate/niivue.umd.js", "utf8");
  const compressed = deflateSync(niivueUmd2);
  const base64 = compressed.toString("base64");
  const stringLiteral = String.raw`${base64}`;
  return stringLiteral;
}
var niivueUmd = readAndZipNiivueUmd();
var vite_config_inject_default = defineConfig({
  define: {
    __NIIVUE_VERSION__: JSON.stringify(process.env.npm_package_version),
    __NIIVUE_UMD__: JSON.stringify(niivueUmd)
  },
  root: ".",
  server: {
    open: "/src/index.html",
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."]
    }
  },
  optimizeDeps: {
    include: ["nifti-reader-js"]
  },
  plugins: [
    commonjs({
      include: /node_modules/
    })
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: false,
    lib: {
      formats: ["umd"],
      entry: resolve(__vite_injected_original_dirname, "src/niivue/index.ts"),
      name: "niivue",
      fileName: (format) => `niivue.${format}.js`
    }
  }
});
export {
  vite_config_inject_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWdfaW5qZWN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NkcmFrZS9HaXQvbmlpdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2RyYWtlL0dpdC9uaWl2dWUvdml0ZS5jb25maWdfaW5qZWN0LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jZHJha2UvR2l0L25paXZ1ZS92aXRlLmNvbmZpZ19pbmplY3QuanNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuLy8gaW1wb3J0IHBhdGggdXNpbmcgaW1wb3J0IHJhdGhlciB0aGFuIHJlcXVpcmVcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInXG5pbXBvcnQgY29tbW9uanMgZnJvbSAnQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG4vLyBmdW5jdGlvbiB0aGF0IHJlYWRzIHRoZSB0ZXh0IGNvbnRlbnRzIG9mIC4vZGlzdC9uaWl2dWUudW1kLmpzIGFzIGEgc3RyaW5nLlxuLy8gdGhhdCBzdHJpbmcgaXMgdGhlbiBpbmplY3RlZCBpbnRvIHRoZSBfX05JSVZVRV9VTURfXyB2YXJpYWJsZSBpbiB0aGVcbi8vIGJ1bmRsZS4gVGhpcyBhbGxvd3MgbmlpdnVlIHRvIGluamVjdCBpdHNlbGYgaW50byBodG1sIHBhZ2VzIGNvbnN0cnVjdGVkXG4vLyBieSBzYXZlQXNIdG1sLlxuZnVuY3Rpb24gcmVhZEFuZFppcE5paXZ1ZVVtZCgpIHtcbiAgY29uc3QgbmlpdnVlVW1kID0gcmVhZEZpbGVTeW5jKCcuL2Rpc3RfaW50ZXJtZWRpYXRlL25paXZ1ZS51bWQuanMnLCAndXRmOCcpXG4gIC8vIHVzZSBub2RlanMgemxpYiB0byBjb21wcmVzcyB0aGUgc3RyaW5nXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBkZWZsYXRlU3luYyhuaWl2dWVVbWQpXG4gIC8vIGNvbnZlcnQgdG8gYmFzZTY0XG4gIGNvbnN0IGJhc2U2NCA9IGNvbXByZXNzZWQudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gIC8vIGNvbnNvbGUubG9nKGJhc2U2NClcbiAgLy8gY29udmVydCB0byBhIHN0cmluZyBsaXRlcmFsXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSBTdHJpbmcucmF3YCR7YmFzZTY0fWBcbiAgLy8gcmV0dXJuIHRoZSBzdHJpbmcgbGl0ZXJhbFxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbFxufVxuXG5jb25zdCBuaWl2dWVVbWQgPSByZWFkQW5kWmlwTmlpdnVlVW1kKClcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZGVmaW5lOiB7XG4gICAgX19OSUlWVUVfVkVSU0lPTl9fOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKSxcbiAgICBfX05JSVZVRV9VTURfXzogSlNPTi5zdHJpbmdpZnkobmlpdnVlVW1kKVxuICB9LFxuICByb290OiAnLicsXG4gIHNlcnZlcjoge1xuICAgIG9wZW46ICcvc3JjL2luZGV4Lmh0bWwnLFxuICAgIGZzOiB7XG4gICAgICAvLyBBbGxvdyBzZXJ2aW5nIGZpbGVzIGZyb20gb25lIGxldmVsIHVwIHRvIHRoZSBwcm9qZWN0IHJvb3RcbiAgICAgIGFsbG93OiBbJy4uJ11cbiAgICB9XG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsnbmlmdGktcmVhZGVyLWpzJ11cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGNvbW1vbmpzKHtcbiAgICAgIGluY2x1ZGU6IC9ub2RlX21vZHVsZXMvXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuL2Rpc3QnLFxuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGZvcm1hdHM6IFsndW1kJ10sXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbmlpdnVlL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnbmlpdnVlJyxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgbmlpdnVlLiR7Zm9ybWF0fS5qc2BcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsbUJBQW1CO0FBQzVCLE9BQU8sY0FBYztBQUNyQixTQUFTLG9CQUFvQjtBQU43QixJQUFNLG1DQUFtQztBQVl6QyxTQUFTLHNCQUFzQjtBQUM3QixRQUFNQSxhQUFZLGFBQWEscUNBQXFDLE1BQU07QUFFMUUsUUFBTSxhQUFhLFlBQVlBLFVBQVM7QUFFeEMsUUFBTSxTQUFTLFdBQVcsU0FBUyxRQUFRO0FBRzNDLFFBQU0sZ0JBQWdCLE9BQU8sTUFBTSxNQUFNO0FBRXpDLFNBQU87QUFDVDtBQUVBLElBQU0sWUFBWSxvQkFBb0I7QUFFdEMsSUFBTyw2QkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sb0JBQW9CLEtBQUssVUFBVSxRQUFRLElBQUksbUJBQW1CO0FBQUEsSUFDbEUsZ0JBQWdCLEtBQUssVUFBVSxTQUFTO0FBQUEsRUFDMUM7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQTtBQUFBLE1BRUYsT0FBTyxDQUFDLElBQUk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGlCQUFpQjtBQUFBLEVBQzdCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsS0FBSztBQUFBLE1BQ0gsU0FBUyxDQUFDLEtBQUs7QUFBQSxNQUNmLE9BQU8sUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUMvQyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxVQUFVLE1BQU07QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJuaWl2dWVVbWQiXQp9Cg==
