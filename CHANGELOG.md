<a name="2.0.0-rc.9"></a>
# [2.0.0-rc.9](https://github.com/akveo/oliveui/compare/2.0.0-rc.8...2.0.0-rc.9) (2018-06-19) :rocket:

### Highlights

* New design theme **Corporate** 
* New components: Progress Bar, Alert
* OAuth2 Strategy with Google Auth example
* New documentation website with live examples
* Auth module refactoring

### Bug Fixes

* **context-menu:** hide on menu item click ([#431](https://github.com/akveo/oliveui/issues/431)) ([a5bcd3c](https://github.com/akveo/oliveui/commit/a5bcd3c))
* **docs:** add missing operator ([#455](https://github.com/akveo/oliveui/issues/455)) ([1cb4993](https://github.com/akveo/oliveui/commit/1cb4993))
* **docs:** add progress-bar icon ([#476](https://github.com/akveo/oliveui/issues/476)) ([98562f5](https://github.com/akveo/oliveui/commit/98562f5))
* **docs:** fix auth install article Closes [#273](https://github.com/akveo/oliveui/issues/273) ([180d8f1](https://github.com/akveo/oliveui/commit/180d8f1))
* **docs:** update mobile styles ([#487](https://github.com/akveo/oliveui/issues/487)) ([6af2694](https://github.com/akveo/oliveui/commit/6af2694))
* **docs:** update styles ([#486](https://github.com/akveo/oliveui/issues/486)) ([9e44fb8](https://github.com/akveo/oliveui/commit/9e44fb8))
* **footer:** use correct footer color variable ([#454](https://github.com/akveo/oliveui/issues/454)) ([c2e310d](https://github.com/akveo/oliveui/commit/c2e310d))
* **layout:** fix layout height when header is not fixed ([#437](https://github.com/akveo/oliveui/issues/437)) ([084391b](https://github.com/akveo/oliveui/commit/084391b))
* **popover:** hide when host was removed ([#430](https://github.com/akveo/oliveui/issues/430)) ([a07496d](https://github.com/akveo/oliveui/commit/a07496d))
* **reveal-card:** fix second card being visible on small screens ([#438](https://github.com/akveo/oliveui/issues/438)) ([cad2246](https://github.com/akveo/oliveui/commit/cad2246))
* **rtl:** reset bootstrap default styles ([#414](https://github.com/akveo/oliveui/issues/414)) ([7634df5](https://github.com/akveo/oliveui/commit/7634df5))
* **search:** resolve search field component factory ([#439](https://github.com/akveo/oliveui/issues/439)) ([15cf18d](https://github.com/akveo/oliveui/commit/15cf18d))
* **theme:** add new variable(btn-outline-focus-fg) for focused outline buttons ([#471](https://github.com/akveo/oliveui/issues/471)) ([df31a4c](https://github.com/akveo/oliveui/commit/df31a4c))
* **theme:** remove layout-padding for corporate theme, remove unnecessary color from icon ([#496](https://github.com/akveo/oliveui/issues/496)) ([49abbb9](https://github.com/akveo/oliveui/commit/49abbb9))


### Code Refactoring

* **auth:** provider -> strategy, `setup` method, multiple tokens ([3428ec3](https://github.com/akveo/oliveui/commit/3428ec3))


### Features

* **auth:** add OAuth2 example with google auth ([fd95095](https://github.com/akveo/oliveui/commit/fd95095))
* **auth:** add OAuth2 strategy ([2f28cbc](https://github.com/akveo/oliveui/commit/2f28cbc))
* **card:** option to hide toggle button in reveal/flip cards ([#448](https://github.com/akveo/oliveui/issues/448)) ([ef5ebbb](https://github.com/akveo/oliveui/commit/ef5ebbb))
* **docs:** update docs design, add playground examples ([f40e78f](https://github.com/akveo/oliveui/commit/f40e78f))
* **docs:** update urls to include baseUrl ([#489](https://github.com/akveo/oliveui/issues/489)) ([f7fb11a](https://github.com/akveo/oliveui/commit/f7fb11a))
* **docs:** use path-location instead of hash ([61d4139](https://github.com/akveo/oliveui/commit/61d4139))
* **menu:** add collapseAll function ([#478](https://github.com/akveo/oliveui/issues/478)) ([2942bfd](https://github.com/akveo/oliveui/commit/2942bfd))
* **sidebar:** breakpoints configuration for compacted states  ([#457](https://github.com/akveo/oliveui/issues/457)) ([56411db](https://github.com/akveo/oliveui/commit/56411db))
* **theme:** add alert component ([ee27fda](https://github.com/akveo/oliveui/commit/ee27fda))
* **theme:** add progress-bar component ([#459](https://github.com/akveo/oliveui/issues/459)) ([3693494](https://github.com/akveo/oliveui/commit/3693494))
* **theme:** corporate - new theme ([#479](https://github.com/akveo/oliveui/issues/479)) ([c75eaf7](https://github.com/akveo/oliveui/commit/c75eaf7))

### HOW TO UPGRADE/BREAKING CHANGES
Multiple breaking changes introduced to auth module to improve code readability, 
follow better naming conventions and for better extensibility in future releases.
More details and update steps: https://github.com/akveo/oliveui/blob/master/src/framework/auth/UPGRADE.md#200-rc8-200-rc9

<a name="2.0.0-rc.8"></a>
# [2.0.0-rc.8](https://github.com/akveo/oliveui/compare/2.0.0-rc.7...2.0.0-rc.8) (2018-05-10)


### Features

* **auth:** add support for refresh tokens ([#390](https://github.com/akveo/oliveui/issues/390)) ([dc57c85](https://github.com/akveo/oliveui/commit/dc57c85))
* **theme:** add RTL support ([#343](https://github.com/akveo/oliveui/issues/343)) ([0326c1c](https://github.com/akveo/oliveui/commit/0326c1c))
* update to angular 6 ([#408](https://github.com/akveo/oliveui/issues/408)) ([16314e8](https://github.com/akveo/oliveui/commit/16314e8))



<a name="2.0.0-rc.7"></a>
# [2.0.0-rc.7](https://github.com/akveo/oliveui/compare/2.0.0-rc.6...2.0.0-rc.7) (2018-04-21)


### Bug Fixes

* **auth:** fix full-name validation error showing password validation text ([d12397b](https://github.com/akveo/oliveui/commit/d12397b))
* **auth:** fix jwt interceptor to set Authorization header only if token is valid ([#294](https://github.com/akveo/oliveui/issues/294)) ([1e99ff3](https://github.com/akveo/oliveui/commit/1e99ff3))
* **buttons:** indicate focus state of outline button just with border-color ([e68a1ea](https://github.com/akveo/oliveui/commit/e68a1ea)), closes [#295](https://github.com/akveo/oliveui/issues/295)
* **docs:** add context-menu item click handler example ([#371](https://github.com/akveo/oliveui/issues/371)) ([96ec81b](https://github.com/akveo/oliveui/commit/96ec81b))
* **docs:** fix incorrect component mention ([#375](https://github.com/akveo/oliveui/issues/375)) ([3fcbb61](https://github.com/akveo/oliveui/commit/3fcbb61)), closes [#286](https://github.com/akveo/oliveui/issues/286)
* **docs:** fix typo in auth-guard docs ([#277](https://github.com/akveo/oliveui/issues/277)) ([682314d](https://github.com/akveo/oliveui/commit/682314d))
* **docs:** return missed section anchors ([#370](https://github.com/akveo/oliveui/issues/370)) ([3895c81](https://github.com/akveo/oliveui/commit/3895c81))
* **layout:** fix flexbug, same as in bcbfcc0 but works in IE11 too ([#148](https://github.com/akveo/oliveui/issues/148)) ([#355](https://github.com/akveo/oliveui/issues/355)) ([a432e82](https://github.com/akveo/oliveui/commit/a432e82))
* **menu:** apply default values for menuItems ([#344](https://github.com/akveo/oliveui/issues/344)) ([674eef5](https://github.com/akveo/oliveui/commit/674eef5))
* add polyfills for IE (es7 array & object) ([#361](https://github.com/akveo/oliveui/issues/361)) ([3f91898](https://github.com/akveo/oliveui/commit/3f91898)), closes [#272](https://github.com/akveo/oliveui/issues/272)
* provide browser globals with injection tokens ([#358](https://github.com/akveo/oliveui/issues/358)) ([63f4bb8](https://github.com/akveo/oliveui/commit/63f4bb8))
* **menu:** avoid DOM elements creation for hidden menu items ([#312](https://github.com/akveo/oliveui/issues/312)) ([0c10917](https://github.com/akveo/oliveui/commit/0c10917)), closes [#270](https://github.com/akveo/oliveui/issues/270)
* **menu:** trigger change detection after setting max-height ([#349](https://github.com/akveo/oliveui/issues/349)) ([8c10372](https://github.com/akveo/oliveui/commit/8c10372)), closes [#263](https://github.com/akveo/oliveui/issues/263)
* **outline-btn-group:** reduce specificity of transparent background ([#313](https://github.com/akveo/oliveui/issues/313)) ([eb18ebe](https://github.com/akveo/oliveui/commit/eb18ebe)), closes [#295](https://github.com/akveo/oliveui/issues/295)
* **popover:** run markForCheck to detect changes if nb-layout has onPush ([#267](https://github.com/akveo/oliveui/issues/267)) ([7af0f62](https://github.com/akveo/oliveui/commit/7af0f62)), closes [#266](https://github.com/akveo/oliveui/issues/266)
* **search:** prevent search from crashing when no layout ([#332](https://github.com/akveo/oliveui/issues/332)) ([36dc9dd](https://github.com/akveo/oliveui/commit/36dc9dd))
* **styles:** get rid of nested mixins as sass doesn't support this for the time being ([#331](https://github.com/akveo/oliveui/issues/331)) ([157b69d](https://github.com/akveo/oliveui/commit/157b69d)), closes [#316](https://github.com/akveo/oliveui/issues/316)
* **theme:** fix window and document providers to work in AOT ([#345](https://github.com/akveo/oliveui/issues/345)) ([0aa898b](https://github.com/akveo/oliveui/commit/0aa898b))


### Features

* **docs:** add capability to use playground module in the docs application ([#310](https://github.com/akveo/oliveui/issues/310)) ([7676095](https://github.com/akveo/oliveui/commit/7676095))
* **docs:** add tabs to docs ([12b18c4](https://github.com/akveo/oliveui/commit/12b18c4))
* **menu:** add support for query parameters ([#283](https://github.com/akveo/oliveui/issues/283)) ([#324](https://github.com/akveo/oliveui/issues/324)) ([bbd86aa](https://github.com/akveo/oliveui/commit/bbd86aa))


### BREAKING CHANGES

* **menu:** URL fragment no longer affects menu items selection.
Now we only find matches between path part of the URL and `link` property of menu-item.



<a name="2.0.0-rc.6"></a>
# [2.0.0-rc.6](https://github.com/akveo/oliveui/compare/2.0.0-rc.5...2.0.0-rc.6) (2018-02-22)


### Bug Fixes

* **DEV_DOCS:** add missed line in development on the latest oliveui sources ([#182](https://github.com/akveo/oliveui/issues/182)) ([3b84981](https://github.com/akveo/oliveui/commit/3b84981))
* **docs:** update font spacing ([#193](https://github.com/akveo/oliveui/issues/193)) ([7e2a41a](https://github.com/akveo/oliveui/commit/7e2a41a))
* **docs:** update menu component to react to expand (add a relevant class) ([#206](https://github.com/akveo/oliveui/issues/206)) ([18ccdf6](https://github.com/akveo/oliveui/commit/18ccdf6)), closes [#180](https://github.com/akveo/oliveui/issues/180)
* **docs:** use correct tag in usage example ([#186](https://github.com/akveo/oliveui/issues/186)) ([b2333a9](https://github.com/akveo/oliveui/commit/b2333a9))
* **menu:** don't collapse menu which has a selected item ([#225](https://github.com/akveo/oliveui/issues/225)) ([5c489f3](https://github.com/akveo/oliveui/commit/5c489f3))
* **menu:** fix items not being prepared when passed through input ([#181](https://github.com/akveo/oliveui/issues/181)) ([2e9d14a](https://github.com/akveo/oliveui/commit/2e9d14a))
* **search:** fix search not un-subscribing from events ([#185](https://github.com/akveo/oliveui/issues/185)) ([691e100](https://github.com/akveo/oliveui/commit/691e100))


### Code Refactoring

* **auth:** move token storage out of token service ([c8273da](https://github.com/akveo/oliveui/commit/c8273da))
* **theme:** remove user context menu ([#231](https://github.com/akveo/oliveui/issues/231)) ([959bd4a](https://github.com/akveo/oliveui/commit/959bd4a))


### Features

* **security:** add new security module with acl implementation ([#187](https://github.com/akveo/oliveui/issues/187)) ([86b2784](https://github.com/akveo/oliveui/commit/a4da28938)), closes [#164](https://github.com/akveo/oliveui/issues/164)
* **auth:** ability to configure social link ([#205](https://github.com/akveo/oliveui/issues/205)) ([86b2784](https://github.com/akveo/oliveui/commit/86b2784)), closes [#171](https://github.com/akveo/oliveui/issues/171)
* **bootstrap:** update  bootstrap to 4.0.0 release (including ng-bootstrap, angular) ([#226](https://github.com/akveo/oliveui/issues/226)) ([f047f14](https://github.com/akveo/oliveui/commit/f047f14)), closes [#160](https://github.com/akveo/oliveui/issues/160) [#223](https://github.com/akveo/oliveui/issues/223) [#224](https://github.com/akveo/oliveui/issues/224)
* **checkbox:** expand checkbox variables for easier customization ([6b93924](https://github.com/akveo/oliveui/commit/6b93924)), closes [#143](https://github.com/akveo/oliveui/issues/143)
* **context-menu:** add context menu component ([13799a5](https://github.com/akveo/oliveui/commit/13799a5))
* **popover:** add new awesome `popover` component  ([7dbefd6](https://github.com/akveo/oliveui/commit/7dbefd6))
* **popover:** add popover-border-radius theme var ([#254](https://github.com/akveo/oliveui/issues/254)) ([baf1a61](https://github.com/akveo/oliveui/commit/baf1a61))
* **ssr:** add server-side rendering support  ([c826187](https://github.com/akveo/oliveui/commit/c826187))
* **tabset:** add `lazyLoad` property to `nb-tab` so that it loads content before it is actually shown ([#227](https://github.com/akveo/oliveui/issues/227)) ([270995d](https://github.com/akveo/oliveui/commit/270995d)), closes [#144](https://github.com/akveo/oliveui/issues/144)
* **theme:** add capability append component to the layout top by its factory ([#253](https://github.com/akveo/oliveui/issues/253)) ([515636c](https://github.com/akveo/oliveui/commit/515636c))
* **user:** allow use base64 images for user picture ([#238](https://github.com/akveo/oliveui/issues/238)) ([28338a7](https://github.com/akveo/oliveui/commit/28338a7))


### BREAKING CHANGES

* **theme:** NbUserComponent no longer has context menu. We've
completely moved context menu in the separate component. So, to
migrate from the previous version you have to remove user menu items
```
<nb-user [menu]="items"></nb-user>
```
and use NbContextMenuDirective:
```
<nb-user [nbContextMenu]="items"></nb-user>
```
* **auth:** 
1) `NB_AUTH_TOKEN_WRAPPER_CLASS` renamed to `NB_AUTH_TOKEN_CLASS` and you should use `useValue` instead of `useClass` when providing a token:
`{ provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },` to `{ provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },`

2) `setValue` method removed from `NbAuthSimpleToken`, `NbAuthJWTToken`, tokens only accept read-only value when created through constructor now.

3) Token Storage moved out from `NbTokenService` into a separate `NbTokenStorage`.
If you need to change the storage behavior or provide your own - just extend your class from basic `NbTokenStorage`
or `NbTokenLocalStorage` and provide in your `app.module`:
```
  { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
```
* **checkbox:** Checkbox check mark color variable (radio-fg) is expanded.
There are three variables instead to set a color depending a the checkbox state:
- checkbox-checkmark - base color
- checkbox-checked-checkmark - color when checkbox checked
- checkbox-disabled-checkmark - color when checkbox is disabled



<a name="2.0.0-rc.5"></a>
# [2.0.0-rc.5](https://github.com/akveo/oliveui/compare/v2.0.0-rc.4...v2.0.0-rc.5) (2018-01-31)


### Bug Fixes

* **docs:** remove comma between shorthand properties in themes table ([#130](https://github.com/akveo/oliveui/issues/130)) ([#133](https://github.com/akveo/oliveui/issues/133)) ([b36a409](https://github.com/akveo/oliveui/commit/b36a409))
* **docs:** update marked version ([#124](https://github.com/akveo/oliveui/issues/124)) ([f4c970e](https://github.com/akveo/oliveui/commit/f4c970e))
* **header:** fix layout header test ([#153](https://github.com/akveo/oliveui/issues/153)) ([b97ee8f](https://github.com/akveo/oliveui/commit/b97ee8f))
* **menu:** remove hardcoded max-height ([#122](https://github.com/akveo/oliveui/issues/122)) ([a753bee](https://github.com/akveo/oliveui/commit/a753bee)), closes [#65](https://github.com/akveo/oliveui/issues/65)
* **menu:** stop sidebar adding display: none to collapsed item span t… ([#155](https://github.com/akveo/oliveui/issues/155)) ([4c10d2a](https://github.com/akveo/oliveui/commit/4c10d2a))
* **search:** fix tests some time not passing on search ([#176](https://github.com/akveo/oliveui/issues/176)) ([254ddd3](https://github.com/akveo/oliveui/commit/254ddd3))
* **sidebar:** only expand sidebar when item has children elements ([#158](https://github.com/akveo/oliveui/issues/158)) ([3a47dbf](https://github.com/akveo/oliveui/commit/3a47dbf)), closes [#23](https://github.com/akveo/oliveui/issues/23)
* **travis:** fix karma config for browserstack ([#156](https://github.com/akveo/oliveui/issues/156)) ([d5a4873](https://github.com/akveo/oliveui/commit/d5a4873))
* **travis:** remove git depth to allow commits comparison ([#150](https://github.com/akveo/oliveui/issues/150)) ([4704d9e](https://github.com/akveo/oliveui/commit/4704d9e))
* **travis:** stop randomly failing builds ([#126](https://github.com/akveo/oliveui/issues/126)) ([3740e08](https://github.com/akveo/oliveui/commit/3740e08))


### Features

* **auth:** warn about empty token, return falsy result ([ad8afb0](https://github.com/akveo/oliveui/commit/ad8afb0))
* **badge:** add new badge component ([#111](https://github.com/akveo/oliveui/issues/111)) ([a9324b4](https://github.com/akveo/oliveui/commit/a9324b4))
* **cards:** new card types ([f15470a](https://github.com/akveo/oliveui/commit/f15470a)), closes [#139](https://github.com/akveo/oliveui/issues/139)
* **search:** add input to be able to customize info label ([#147](https://github.com/akveo/oliveui/issues/147)) ([12a55dc](https://github.com/akveo/oliveui/commit/12a55dc)), closes [#21](https://github.com/akveo/oliveui/issues/21)


### BREAKING CHANGES

* **auth:** now if login/register returns no value for token, unsuccessful NbAuthResult is returned



<a name="2.0.0-rc.4"></a>
# [2.0.0-rc.4](https://github.com/akveo/oliveui/compare/2.0.0-rc.3...2.0.0-rc.4) (2017-12-31) :christmas_tree:

This release features an update to angular 5+, rxjs 5.5+. Make sure to update these dependencies in your project.
 
### Bug Fixes

* **auth:** fix scrollbar cutoff issue with auth ([#87](https://github.com/akveo/oliveui/issues/87)) ([893d56a](https://github.com/akveo/oliveui/commit/893d56a))
* **auth:** fix typo in request password sub-title ([#105](https://github.com/akveo/oliveui/issues/105)) ([336b05e](https://github.com/akveo/oliveui/commit/336b05e))
* **theme:** fix an issue when scrollbar didn't reset after a route change ([#91](https://github.com/akveo/oliveui/issues/91)) ([9c77dad](https://github.com/akveo/oliveui/commit/9c77dad))
* **theme:** remove stock bootstrap box-shadow ([#72](https://github.com/akveo/oliveui/issues/72)) ([7d7b3ab](https://github.com/akveo/oliveui/commit/7d7b3ab))
* **theme:** scrollbars color in IE ([#66](https://github.com/akveo/oliveui/issues/66)) ([b5b500c](https://github.com/akveo/oliveui/commit/b5b500c))


### Features
* **logout:** let logout.component use form configs ([#78](https://github.com/akveo/oliveui/issues/78)) ([41d0f78](https://github.com/akveo/oliveui/commit/41d0f78))
* **dependencies:** update dependencies (angular 5+, rxjs, bootstrap, smart-table) ([#108](https://github.com/akveo/oliveui/issues/108))

### BREAKING CHANGES

* **dependencies:** since angular and rxjs are updated please make sure to look through the corresponding changelogs for the details


<a name="2.0.0-rc.3"></a>
# [2.0.0-rc.3](https://github.com/akveo/oliveui/compare/2.0.0-RC.2...2.0.0-rc.3) (2017-10-26)


### Bug Fixes

* **auth:** fix auth service isAuthenticated, onAuthenticationChange not returning a boolean, fix [#15](https://github.com/akveo/oliveui/issues/15) ([30a1d47](https://github.com/akveo/oliveui/commit/30a1d47))
* **buttons:** remove transition from buttons ([7e3f56d](https://github.com/akveo/oliveui/commit/7e3f56d))
* **js-theme:** fix defaut font, fix e2e & unit tests ([cff8561](https://github.com/akveo/oliveui/commit/cff8561))
* **layout:** prevent layout expansion when some child with overflow:hidden has an element with width larger than layout width ([82e4dfc](https://github.com/akveo/oliveui/commit/82e4dfc))
* **user:** fix user component context menu showing an icon not correctly, fix [#25](https://github.com/akveo/oliveui/issues/25) ([f723e54](https://github.com/akveo/oliveui/commit/f723e54))


### Features

* **dependencies:** update bootstrap & angular, accompanying fixes (angular cli kept as previous due to build issues) ([3660f9a](https://github.com/akveo/oliveui/commit/3660f9a)), closes [#42](https://github.com/akveo/oliveui/issues/42)
* **font:** update default font value ([5b93759](https://github.com/akveo/oliveui/commit/5b93759))
* **theme:** support hidden property ([#31](https://github.com/akveo/oliveui/issues/31)) ([f26922a](https://github.com/akveo/oliveui/commit/f26922a))


### BREAKING CHANGES

* **dependencies:** since bootstrap is updated please look through the bootstrap release notes (https://github.com/twbs/bootstrap/releases) for proper steps to update your styles
