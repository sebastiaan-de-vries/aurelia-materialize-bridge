System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customAttribute, bindingMode, inject, AttributeManager, getBooleanFromAttributeValue, MdDropdown;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdDropdown = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdDropdown, [{
          key: 'activates',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'alignment',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 'left';
          },
          enumerable: true
        }, {
          key: 'belowOrigin',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'constrainWidth',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'gutter',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }, {
          key: 'hover',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdTitle',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: null,
          enumerable: true
        }, {
          key: 'inDuration',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 300;
          },
          enumerable: true
        }, {
          key: 'outDuration',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: function initializer() {
            return 225;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdDropdown(element) {
          _classCallCheck(this, _MdDropdown);

          _defineDecoratedPropertyDescriptor(this, 'activates', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'alignment', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'belowOrigin', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'constrainWidth', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'gutter', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'hover', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdTitle', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'inDuration', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'outDuration', _instanceInitializers);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdDropdown.prototype.attached = function attached() {
          this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

          this.attributeManager.addClasses('dropdown-button');
          this.contentAttributeManager.addClasses('dropdown-content');
          this.attributeManager.addAttributes({ 'data-activates': this.activates });
          $(this.element).dropdown({
            alignment: this.alignment,
            belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
            constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
            gutter: parseInt(this.gutter, 10),
            hover: getBooleanFromAttributeValue(this.hover),
            inDuration: parseInt(this.inDuration, 10),
            outDuration: parseInt(this.outDuration, 10)
          });
        };

        MdDropdown.prototype.detached = function detached() {
          this.attributeManager.removeAttributes('data-activates');
          this.attributeManager.removeClasses('dropdown-button');
          this.contentAttributeManager.removeClasses('dropdown-content');
        };

        var _MdDropdown = MdDropdown;
        MdDropdown = inject(Element)(MdDropdown) || MdDropdown;
        MdDropdown = customAttribute('md-dropdown')(MdDropdown) || MdDropdown;
        return MdDropdown;
      })();

      _export('MdDropdown', MdDropdown);
    }
  };
});
//# sourceMappingURL=../dist/dev/dropdown/dropdown.js.map